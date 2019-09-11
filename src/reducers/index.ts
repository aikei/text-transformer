import { State } from "./State";
import { TrsAction } from "./TrsAction";
import * as _ from "lodash";
import { Actions } from "./Actions";

export function reduce(state: State|undefined, action: TrsAction): State {
    if (!state) {
        return {
            input: "Lorem ipsum dolor sit amet",
            output: "",
            transforms: [
                {
                    type: "none"
                }
            ]
        }
    }
    let newState = _.cloneDeep(state);

    switch (action.type) {
        case Actions.INPUT_RECEIVED:
            newState.input = action.data.newInput;
            break;

        case Actions.TRANSFORM_ADDED:
            newState.transforms.push(action.data.type);
            break;
    }

    return newState;
}