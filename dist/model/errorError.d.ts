export declare class ErrorError {
    'statusCode': number;
    'name': string;
    'message'?: string;
    'code'?: string;
    'details'?: Array<object>;
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
