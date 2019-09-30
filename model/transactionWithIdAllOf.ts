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


export class TransactionWithIdAllOf {
    /**
    * ID of Transaction
    */
    'transactionId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transactionId",
            "baseName": "transactionId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransactionWithIdAllOf.attributeTypeMap;
    }
}
