import { State } from "./State";
import { TrsAction } from "./TrsAction";
import * as _ from "lodash";
import { Actions } from "./Actions";
import { TransformData, TransformPreferences } from "./Transforms";
import { encode } from "../encoders/encode";
import { AesEncryptionOptions } from "../encoders/aes-encrypt-encoder";
import * as crypto from "crypto";

function setDefaultOutputEncoding(state: State): State {
    let lastTransformIndex = state.transforms.length;
    do {
        lastTransformIndex = lastTransformIndex-1;
    } while(lastTransformIndex >= 0 && state.transforms[lastTransformIndex].type === "none")
    const lastTransform = state.transforms[lastTransformIndex];
    if (!lastTransform) {
        state.outputEncoding = state.inputEncoding;
    } else {
        state.outputEncoding = TransformPreferences[lastTransform.type].defaultEncoding;
    }
    return state;
}

export function reduce(state: State|undefined, action: TrsAction): State {

    console.log("action received: " + JSON.stringify(action));

    if (!state) {
        return {
            input: "Lorem ipsum dolor sit amet",
            inputEncoding: "utf8",
            output: "Lorem ipsum dolor sit amet",
            outputEncoding: "utf8",
            newTransformId: 11,
            transforms: [
                {
                    type: "none",
                    id: 10,
                    options: {}
                }
            ]
        }
    }

    let newState = _.cloneDeep(state);

    try {

        switch (action.type) {

            case Actions.INPUT_ENCODING_CHANGED:
                newState.inputEncoding = action.data.newEncoding;
                break;
                
            case Actions.OUTPUT_ENCODING_CHANGED:
                newState.outputEncoding = action.data.newEncoding;
                break;

            case Actions.INPUT_RECEIVED:
                newState.input = action.data.newInput;
                break;

            case Actions.TRANSFORM_ADDED:
                newState.transforms.push({
                    type: action.data.type,
                    id: newState.newTransformId++,
                    options: {}
                });
                setDefaultOutputEncoding(newState);
                break;

            case Actions.REMOVE_TRANSFORM:
                newState.transforms = newState.transforms.filter(transformData => transformData.id !== action.data.transformId);
                setDefaultOutputEncoding(newState);
                break;

            case Actions.CHANGE_TRANSFORM_TYPE:
                const transform = newState.transforms.find((value: TransformData) => value.id === action.data.transformId);
                if (transform) {
                    transform.type = action.data.newType;
                    setDefaultOutputEncoding(newState);
                    switch (transform.type) {
                        case "aes-encrypt":
                            const options: AesEncryptionOptions = transform.options as AesEncryptionOptions;
                            options.bits = "128";
                            options.variation = "cbc";
                            options.key = crypto.randomBytes(16).toString("base64");
                            options.iv = crypto.randomBytes(16).toString("base64");
                            console.log("transformData.options:", options);
                            break;

                        case "aes-decrypt":
                            transform.options.bits = "128";
                            transform.options.variation = "cbc";
                            if (!transform.options.key) {
                                throw new Error("Key is required for decryption");
                            }
                            if (transform.options.variation === "cbc") {
                                if (!transform.options.iv) {
                                    throw new Error("IV is required for cbc mode decryption");
                                }
                            }
                            break;
                    }
                } else {
                    console.error("Tried to change type of an unexistant transform: " + JSON.stringify(action));
                }
                break;

            case Actions.TRANSFORM_OPTIONS_CHANGED:
            {
                const transform = newState.transforms.find((value: TransformData) => value.id === action.data.transformId);
                if (transform) {
                    transform.options[action.data.prop] = action.data.newValue;
                    switch (transform.type) {
                        case "aes-encrypt":
                            if (action.data.prop === "bits") {
                                const keyLength = Number(transform.options.bits) / 8;
                                transform.options.key = crypto.randomBytes(keyLength).toString("base64");
                                // transform.options.iv = crypto.randomBytes(keyLength).toString("base64");
                            }
                            if (transform.options.variation === "ecb") {
                                transform.options.iv = "";
                            } else if (transform.options.variation === "cbc") {
                                transform.options.iv = crypto.randomBytes(16).toString("base64");
                            }
                            break;
                    }
                } else {
                    throw new Error(`No transform with id ${action.data.transformId}`)
                }
            }
            break;
        }
        newState.output = 
            encode(newState.input, newState.inputEncoding, _.cloneDeep(newState.transforms))
                .toString(newState.outputEncoding);
        newState.outputError = undefined;
    } catch(err) {
        newState.outputError = err.message;
    }

    return newState;
}
