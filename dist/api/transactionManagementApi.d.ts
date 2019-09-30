/// <reference types="node" />
import http = require('http');
import { Transaction } from '../model/transaction';
import { TransactionResult } from '../model/transactionResult';
import { TransactionWithId } from '../model/transactionWithId';
import { Authentication } from '../model/models';
import { ApiKeyAuth } from '../model/models';
import { HttpBasicAuth } from '../model/models';
export declare enum TransactionManagementApiApiKeys {
    apiKeyAuth = 0
}
export declare class TransactionManagementApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKeyAuth': ApiKeyAuth;
        'bearerAuth': HttpBasicAuth;
    };
    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: TransactionManagementApiApiKeys, value: string): void;
    username: string;
    password: string;
    createTransaction(transaction?: Transaction, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: TransactionResult;
    }>;
    getTransaction(transactionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Transaction;
    }>;
    getTransactions(limit?: number, start?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<TransactionWithId>;
    }>;
    removeTransaction(transactionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
}
