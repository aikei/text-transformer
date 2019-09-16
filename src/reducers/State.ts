import { TransformData } from "./Transforms";

export type EncodingType = "utf8"|"hex"|"base64";

export interface State {
    input: string;
    output: string;
    inputEncoding: EncodingType;
    outputEncoding: EncodingType;
    newTransformId: number;
    transforms: TransformData[];
}