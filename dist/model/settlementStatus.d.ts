export declare class SettlementStatus {
    'settlementId': string;
    'status': SettlementStatus.StatusEnum;
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
export declare namespace SettlementStatus {
    enum StatusEnum {
        Open,
        Pending,
        Cancelled,
        Completed,
        Expired,
        Refunded
    }
}
