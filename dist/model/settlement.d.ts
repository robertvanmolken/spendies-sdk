export declare class Settlement {
    'method': Settlement.MethodEnum;
    'dateInitiated': Date;
    'status': Settlement.StatusEnum;
    'issuer': string;
    'currency': string;
    'amount': number;
    'linkedTx'?: string;
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
export declare namespace Settlement {
    enum MethodEnum {
        Ideal,
        Crypto
    }
    enum StatusEnum {
        Open,
        Pending,
        Cancelled,
        Completed,
        Expired,
        Refunded
    }
}
