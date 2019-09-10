export declare class TokenPayload {
    'iss': string;
    'sub': string;
    'dev': string;
    'exp': number;
    'iat'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
