import { TransformData } from "../reducers/Transforms";
import "buffer";
// import { encode as encodeNone } from "./none-encoder";

export function encode(input: string, encoding: "utf8"|"base64"|"hex", transforms: TransformData[]): Buffer {
    console.log("none-encoder");
    let data: Buffer = Buffer.from(input, encoding);
    for (const transform of transforms) {
        const encoder = require(`./${transform.type}-encoder.ts`);
        data = encoder.encode(data, transform);
    }
    return data;
}