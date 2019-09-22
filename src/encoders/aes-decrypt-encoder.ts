import "buffer";
import { TransformData } from "../reducers/Transforms";
import * as crypto from "crypto";

export function encode(input: Buffer, transform: TransformData): Buffer {

    const algorithm = `aes-${transform.options.bits}-${transform.options.variation}`;

    console.log("decrypt algorithm:", algorithm)


    const decipher = crypto.createDecipheriv(algorithm,
        Buffer.from(transform.options.key, "base64"),
        Buffer.from(transform.options.iv, "base64")
    );

    let plainText = decipher.update(input);
    plainText = Buffer.concat([plainText, decipher.final()]);

    return plainText;
}