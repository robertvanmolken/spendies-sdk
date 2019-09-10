import { OriginatorRecipient } from './originatorRecipient';
export declare class Payment {
    'type': Payment.TypeEnum;
    'dateInitiated': string;
    'reasonForPayment': string;
    'targetCurrency': string;
    'targetAmount': number;
    'sourceCurrency'?: string;
    'sourceAmount'?: number;
    'expectedPayments': number;
    'recipients'?: Array<OriginatorRecipient>;
    'originators'?: Array<OriginatorRecipient>;
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
export declare namespace Payment {
    enum TypeEnum {
        Receive,
        Give
    }
}
