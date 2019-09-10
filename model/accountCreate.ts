/**
 * Spendies Backend API
 * This RESTful API is for accessing the back-end functionality of Spendies,  such as registering and verifying accounts, and creating and retrieving wallets, payment requests, and performing payment fullfilments.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: connect@spendies.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Account } from './account';
import { Wallet } from './wallet';

export class AccountCreate {
    'account': Account;
    'wallet'?: Wallet;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "Account"
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "Wallet"
        }    ];

    static getAttributeTypeMap() {
        return AccountCreate.attributeTypeMap;
    }
}

