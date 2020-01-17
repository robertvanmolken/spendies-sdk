/// <reference types="node" />
import http = require('http');
import { AccountCreate } from '../model/accountCreate';
import { AccountInfo } from '../model/accountInfo';
import { AccountKYC } from '../model/accountKYC';
import { AccountResult } from '../model/accountResult';
import { AccountUpdate } from '../model/accountUpdate';
import { BankCheck } from '../model/bankCheck';
import { TokenRequest } from '../model/tokenRequest';
import { Authentication, ApiKeyAuth, OAuth } from '../model/models';
export declare enum AccountManagementApiApiKeys {
    apiKeyAuth = 0
}
export declare class AccountManagementApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKeyAuth': ApiKeyAuth;
        'bearerAuth': OAuth;
    };
    constructor(accessToken?: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: AccountManagementApiApiKeys, value: string): void;
    accessToken: string;
    createAccount(accountCreate?: AccountCreate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: AccountResult;
    }>;
    requestMagiclink(tokenRequest?: TokenRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    retrieveAccount(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: AccountInfo;
    }>;
    updateAccount(accountUpdate?: AccountUpdate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: AccountInfo;
    }>;
    validateAccount(ctVerifyCode: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    validateBank(body: string, id: string, provider?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: object;
    }>;
    verifyAccount(accountKYC?: AccountKYC, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    verifyBank(bankCheck?: BankCheck, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    verifyMagiclink(mlv: string, ctSignature: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: AccountResult;
    }>;
}
