import { LinkedData } from './linkedData';
export declare class SettlerRecipient {
    'name'?: string;
    'address': string;
    'links'?: LinkedData;
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
