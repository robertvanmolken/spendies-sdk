import { WalletWithId } from './walletWithId';
export declare class AccountInfo {
    'name': string;
    'email'?: string;
    'phone'?: string;
    'authLevel': AccountInfo.AuthLevelEnum;
    'wallets'?: Array<WalletWithId>;
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
export declare namespace AccountInfo {
    enum AuthLevelEnum {
        NUMBER_0,
        NUMBER_1,
        NUMBER_2,
        NUMBER_3
    }
}
