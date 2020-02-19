import { SettlerRecipient } from './settlerRecipient';
import { StatusEnum } from './statusEnum';
export declare class Transaction {
    'method': Transaction.MethodEnum;
    'dateInitiated': Date;
    'status': StatusEnum;
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
export declare namespace Transaction {
    enum MethodEnum {
        Request,
        Sent
    }
}
