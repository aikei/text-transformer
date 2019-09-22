export type TransformType = "none"|"aes-encrypt"|"aes-decrypt";

export const TransformPreferences: any = {
    none: {
        defaultEncoding: "utf8"
    },
    "aes-encrypt": {
        defaultEncoding: "base64"
    },
    "aes-decrypt": {
        defaultEncoding: "utf8"
    }
}


export interface TransformData {
    type: TransformType;
    id: number;
    options: any;
}
