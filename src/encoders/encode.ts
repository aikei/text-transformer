import { TransformData } from "../reducers/Transforms";
import "buffer";
import { encode as encodeNone } from "./none-encoder";

export function encode(input: string, encoding: "utf8"|"base64"|"hex", transforms: TransformData[]): Buffer {
    let data: Buffer = Buffer.from(input, encoding);
    for (const transform of transforms) {
        switch (transform.type) {
            case "none":
                data = encodeNone(data, transform);
                break;
        }
    }
    return data;
}