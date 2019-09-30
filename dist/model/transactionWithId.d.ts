import { SettlerRecipient } from './settlerRecipient';
export declare class TransactionWithId {
    'transactionId': string;
    'method': TransactionWithId.MethodEnum;
    'dateInitiated': Date;
    'reasonForTransaction': string;
    'targetCurrency': string;
    'targetAmount': number;
    'sourceCurrency'?: string;
    'sourceAmount'?: number;
    'expectedSettlements': number;
    'recipients'?: Array<SettlerRecipient>;
    'settlers'?: Array<SettlerRecipient>;
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
export declare namespace TransactionWithId {
    enum MethodEnum {
        Request,
        Sent
    }
}
