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

import { SettlerRecipient } from './settlerRecipient';
import { StatusEnum } from './statusEnum';
import { Transaction } from './transaction';
import { TransactionWithIdAllOf } from './transactionWithIdAllOf';

export class TransactionWithId {
    /**
    * ID of Transaction
    */
    'transactionId': string;
    /**
    * Type of transaction
    */
    'method': TransactionWithId.MethodEnum;
    /**
    * Initiated date of transaction
    */
    'dateInitiated': Date;
    'status': StatusEnum;
    /**
    * Reason for transaction request
    */
    'reasonForTransaction': string;
    /**
    * Target (crypto) currency to be paid in
    */
    'targetCurrency': string;
    /**
    * Target (crypto) amount to be paid
    */
    'targetAmount': number;
    /**
    * Source (fiat) currency used for conversion
    */
    'sourceCurrency'?: string;
    /**
    * Source (fiat) amount to be converted
    */
    'sourceAmount'?: number;
    /**
    * Amount of expected settlements
    */
    'expectedSettlements': number;
    /**
    * List of recipients
    */
    'recipients'?: Array<SettlerRecipient>;
    /**
    * List of settlers
    */
    'settlers'?: Array<SettlerRecipient>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transactionId",
            "baseName": "transactionId",
            "type": "string"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "TransactionWithId.MethodEnum"
        },
        {
            "name": "dateInitiated",
            "baseName": "dateInitiated",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "StatusEnum"
        },
        {
            "name": "reasonForTransaction",
            "baseName": "reasonForTransaction",
            "type": "string"
        },
        {
            "name": "targetCurrency",
            "baseName": "targetCurrency",
            "type": "string"
        },
        {
            "name": "targetAmount",
            "baseName": "targetAmount",
            "type": "number"
        },
        {
            "name": "sourceCurrency",
            "baseName": "sourceCurrency",
            "type": "string"
        },
        {
            "name": "sourceAmount",
            "baseName": "sourceAmount",
            "type": "number"
        },
        {
            "name": "expectedSettlements",
            "baseName": "expectedSettlements",
            "type": "number"
        },
        {
            "name": "recipients",
            "baseName": "recipients",
            "type": "Array<SettlerRecipient>"
        },
        {
            "name": "settlers",
            "baseName": "settlers",
            "type": "Array<SettlerRecipient>"
        }    ];

    static getAttributeTypeMap() {
        return TransactionWithId.attributeTypeMap;
    }
}

export namespace TransactionWithId {
    export enum MethodEnum {
        Request = <any> 'request',
        Sent = <any> 'sent'
    }
}
