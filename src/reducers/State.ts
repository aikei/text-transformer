import { TransformData } from "./Transforms";


export interface State {
    input: string;
    output: string;
    newTransformId: number;
    transforms: TransformData[];
}