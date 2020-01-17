export * from './account';
export * from './accountCreate';
export * from './accountInfo';
export * from './accountKYC';
export * from './accountResult';
export * from './accountUpdate';
export * from './bankCheck';
export * from './errorError';
export * from './linkedData';
export * from './modelError';
export * from './settlement';
export * from './settlementCreate';
export * from './settlementResult';
export * from './settlementStatus';
export * from './settlementWithId';
export * from './settlementWithIdAllOf';
export * from './settlerRecipient';
export * from './signature';
export * from './tokenPayload';
export * from './tokenRequest';
export * from './transaction';
export * from './transactionResult';
export * from './transactionWithId';
export * from './transactionWithIdAllOf';
export * from './wallet';
export * from './walletResult';
export * from './walletWithId';
export * from './walletWithIdAllOf';
import localVarRequest = require('request');
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
