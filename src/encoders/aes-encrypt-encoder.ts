import "buffer";
import { TransformData } from "../reducers/Transforms";
import * as crypto from "crypto";
import "buffer";

export interface AesEncryptionOptions {
    key: string;
    iv: string;
    bits: string;
    variation: string;
}

export function encode(input: Buffer, transform: TransformData): Buffer {
    console.log("aes-encrypt-encoder");
    const aesEncryptionOptions: AesEncryptionOptions = transform.options as AesEncryptionOptions;
    const algorithm = `aes-${aesEncryptionOptions.bits}-${aesEncryptionOptions.variation}`;
    const cipher = crypto.createCipheriv(algorithm,
        Buffer.from(aesEncryptionOptions.key, "base64"),
        Buffer.from(aesEncryptionOptions.iv, "base64"));
    let encrypted = cipher.update(input);
    encrypted = Buffer.concat([encrypted, cipher.final() ]);
    return encrypted;
}