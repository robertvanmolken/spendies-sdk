/// <reference types="node" />
import http = require('http');
import { Wallet } from '../model/wallet';
import { WalletResult } from '../model/walletResult';
import { WalletWithId } from '../model/walletWithId';
import { Authentication, ApiKeyAuth, OAuth } from '../model/models';
export declare enum WalletManagementApiApiKeys {
    apiKeyAuth = 0
}
export declare class WalletManagementApi {
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
    setApiKey(key: WalletManagementApiApiKeys, value: string): void;
    accessToken: string;
    createWallet(wallet?: Wallet, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: WalletResult;
    }>;
    getWallet(walletId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Wallet;
    }>;
    removeWallet(walletId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    retrieveWallets(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<WalletWithId>;
    }>;
}
