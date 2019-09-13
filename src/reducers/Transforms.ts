export type TransformType = "none"|"aes-encrypt"|"aes-decrypt";

export interface TransformData {
    type: TransformType;
    id: number;
}
