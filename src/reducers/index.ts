import { State } from "./State";
import { TrsAction } from "./TrsAction";
import * as _ from "lodash";
import { Actions } from "./Actions";

export function reduce(state: State|undefined, action: TrsAction): State {
    if (!state) {
        return {
            input: "Lorem ipsum dolor sit amet",
            output: "",
            newTransformId: 11,
            transforms: [
                {
                    type: "none",
                    id: 10
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
            newState.transforms.push({
                type: action.data.type,
                id: newState.newTransformId++
            });
            break;

        case Actions.REMOVE_TRANSFORM:
            newState.transforms = newState.transforms.filter(transformData => transformData.id !== action.data.transformId);
            break;
    }

    return newState;
}
