import { Account } from './account';
import { Wallet } from './wallet';
export declare class AccountCreate {
    'account': Account;
    'wallet'?: Wallet;
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
