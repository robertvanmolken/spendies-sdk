import { LinkedAccount } from './linkedAccount';
export declare class OriginatorRecipient {
    'name'?: string;
    'address': string;
    'links'?: LinkedAccount;
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
