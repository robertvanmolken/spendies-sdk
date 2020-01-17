export declare class BankCheck {
    'method': BankCheck.MethodEnum;
    'issuer': string;
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
export declare namespace BankCheck {
    enum MethodEnum {
        Ideal
    }
}
