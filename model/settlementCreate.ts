/**
 * Spendies Backend API
 * This RESTful API is for accessing the back-end functionality of Spendies,  such as registering and verifying accounts, and creating and retrieving wallets, transaction requests, and performing transaction fullfilments.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: connect@spendies.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class SettlementCreate {
    /**
    * ID of Transaction
    */
    'transaction': string;
    /**
    * Method of settlement
    */
    'method': SettlementCreate.MethodEnum;
    /**
    * Initiated date of settlement
    */
    'dateInitiated': Date;
    /**
    * Settle transaction through issuer
    */
    'issuer': string;
    /**
    * Currency to settle in
    */
    'currency': string;
    /**
    * Amount to be settled
    */
    'amount': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "string"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "SettlementCreate.MethodEnum"
        },
        {
            "name": "dateInitiated",
            "baseName": "dateInitiated",
            "type": "Date"
        },
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SettlementCreate.attributeTypeMap;
    }
}

export namespace SettlementCreate {
    export enum MethodEnum {
        Ideal = <any> 'ideal',
        Crypto = <any> 'crypto'
    }
}
