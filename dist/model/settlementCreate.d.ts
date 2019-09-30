export declare class SettlementCreate {
    'transaction': string;
    'method': SettlementCreate.MethodEnum;
    'dateInitiated': Date;
    'issuer': string;
    'currency': string;
    'amount': number;
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
export declare namespace SettlementCreate {
    enum MethodEnum {
        Ideal,
        Crypto
    }
}
