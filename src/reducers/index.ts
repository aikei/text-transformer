import { State } from "./State";
import { TrsAction } from "./TrsAction";
import * as _ from "lodash";
import { Actions } from "./Actions";
import { TransformData } from "./Transforms";
import { encode } from "../encoders/encode";
import { AesEncryptionOptions } from "../encoders/aes-encrypt-encoder";
import * as crypto from "crypto";

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
                newState.output = 
                    encode(newState.input, newState.inputEncoding, _.cloneDeep(newState.transforms))
                        .toString(newState.outputEncoding);
                break;
                
            case Actions.OUTPUT_ENCODING_CHANGED:
                newState.outputEncoding = action.data.newEncoding;
                newState.output = 
                    encode(newState.input, newState.inputEncoding, _.cloneDeep(newState.transforms))
                        .toString(newState.outputEncoding);
                break;

            case Actions.INPUT_RECEIVED:
                newState.input = action.data.newInput;
                newState.output = 
                    encode(newState.input, newState.inputEncoding, _.cloneDeep(newState.transforms))
                        .toString(newState.outputEncoding);
                break;

            case Actions.TRANSFORM_ADDED:
                newState.transforms.push({
                    type: action.data.type,
                    id: newState.newTransformId++,
                    options: {}
                });
                break;

            case Actions.REMOVE_TRANSFORM:
                newState.transforms = newState.transforms.filter(transformData => transformData.id !== action.data.transformId);
                newState.output = 
                    encode(newState.input, newState.inputEncoding, _.cloneDeep(newState.transforms))
                        .toString(newState.outputEncoding);
                break;

            case Actions.CHANGE_TRANSFORM_TYPE:
                const transform = newState.transforms.find((value: TransformData) => value.id === action.data.transformId);
                if (transform) {
                    transform.type = action.data.newType;
                    switch (transform.type) {
                        case "aes-encrypt":
                            const options: AesEncryptionOptions = transform.options as AesEncryptionOptions;
                            options.bits = "128";
                            options.variation = "cbc";
                            options.key = crypto.randomBytes(16).toString("base64");
                            options.iv = crypto.randomBytes(16).toString("base64");
                            console.log("transformData.options:", options);
                            break;
                    }
                    newState.output = 
                    encode(newState.input, newState.inputEncoding, _.cloneDeep(newState.transforms))
                        .toString(newState.outputEncoding);
                } else {
                    console.error("Tried to change type of an unexistant transform: " + JSON.stringify(action));
                }
                break;

            case Actions.TRANSFORM_OPTIONS_CHANGED:
            {
                const transform = newState.transforms.find((value: TransformData) => value.id === action.data.transformId);
                if (transform) {
                    transform.options[action.data.prop] = action.data.newValue;
                }
                newState.output = 
                    encode(newState.input, newState.inputEncoding, _.cloneDeep(newState.transforms))
                        .toString(newState.outputEncoding);
            }
            break;
        }
        newState.outputError = undefined;
    } catch(err) {
        newState.outputError = err.message;
    }

    return newState;
}
