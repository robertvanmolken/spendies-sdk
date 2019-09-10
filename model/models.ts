export * from './account';
export * from './accountCreate';
export * from './accountInfo';
export * from './accountKYC';
export * from './accountResult';
export * from './accountUpdate';
export * from './errorError';
export * from './linkedAccount';
export * from './modelError';
export * from './originatorRecipient';
export * from './payment';
export * from './paymentResult';
export * from './paymentWithId';
export * from './paymentWithIdAllOf';
export * from './signature';
export * from './tokenPayload';
export * from './tokenRequest';
export * from './wallet';
export * from './walletResult';
export * from './walletWithId';
export * from './walletWithIdAllOf';

import localVarRequest = require('request');

import { Account } from './account';
import { AccountCreate } from './accountCreate';
import { AccountInfo } from './accountInfo';
import { AccountKYC } from './accountKYC';
import { AccountResult } from './accountResult';
import { AccountUpdate } from './accountUpdate';
import { ErrorError } from './errorError';
import { LinkedAccount } from './linkedAccount';
import { ModelError } from './modelError';
import { OriginatorRecipient } from './originatorRecipient';
import { Payment } from './payment';
import { PaymentResult } from './paymentResult';
import { PaymentWithId } from './paymentWithId';
import { PaymentWithIdAllOf } from './paymentWithIdAllOf';
import { Signature } from './signature';
import { TokenPayload } from './tokenPayload';
import { TokenRequest } from './tokenRequest';
import { Wallet } from './wallet';
import { WalletResult } from './walletResult';
import { WalletWithId } from './walletWithId';
import { WalletWithIdAllOf } from './walletWithIdAllOf';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];
                 
let enumsMap: {[index: string]: any} = {
        "AccountInfo.AuthLevelEnum": AccountInfo.AuthLevelEnum,
        "Payment.TypeEnum": Payment.TypeEnum,
        "PaymentWithId.TypeEnum": PaymentWithId.TypeEnum,
}

let typeMap: {[index: string]: any} = {
    "Account": Account,
    "AccountCreate": AccountCreate,
    "AccountInfo": AccountInfo,
    "AccountKYC": AccountKYC,
    "AccountResult": AccountResult,
    "AccountUpdate": AccountUpdate,
    "ErrorError": ErrorError,
    "LinkedAccount": LinkedAccount,
    "ModelError": ModelError,
    "OriginatorRecipient": OriginatorRecipient,
    "Payment": Payment,
    "PaymentResult": PaymentResult,
    "PaymentWithId": PaymentWithId,
    "PaymentWithIdAllOf": PaymentWithIdAllOf,
    "Signature": Signature,
    "TokenPayload": TokenPayload,
    "TokenRequest": TokenRequest,
    "Wallet": Wallet,
    "WalletResult": WalletResult,
    "WalletWithId": WalletWithId,
    "WalletWithIdAllOf": WalletWithIdAllOf,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            
            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}