/// <reference types="node" />
import http = require('http');
import { Payment } from '../model/payment';
import { PaymentResult } from '../model/paymentResult';
import { PaymentWithId } from '../model/paymentWithId';
import { Authentication } from '../model/models';
import { ApiKeyAuth } from '../model/models';
import { HttpBasicAuth } from '../model/models';
export declare enum PaymentManagementApiApiKeys {
    apiKeyAuth = 0
}
export declare class PaymentManagementApi {
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
    setApiKey(key: PaymentManagementApiApiKeys, value: string): void;
    username: string;
    password: string;
    createPayment(payment?: Payment, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: PaymentResult;
    }>;
    getPayment(paymentId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Payment;
    }>;
    getPayments(limit: number, start: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<PaymentWithId>;
    }>;
    removePayment(paymentId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
}
