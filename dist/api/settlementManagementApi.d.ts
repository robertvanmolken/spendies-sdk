/// <reference types="node" />
import http = require('http');
import { Settlement } from '../model/settlement';
import { SettlementCreate } from '../model/settlementCreate';
import { SettlementResult } from '../model/settlementResult';
import { SettlementWithId } from '../model/settlementWithId';
import { Authentication, OAuth } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum SettlementManagementApiApiKeys {
    apiKeyAuth = 0
}
export declare class SettlementManagementApi {
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
    setApiKey(key: SettlementManagementApiApiKeys, value: string): void;
    accessToken: string;
    createSettlement(settlementCreate?: SettlementCreate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: SettlementResult;
    }>;
    getSettlement(settlementId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Settlement;
    }>;
    getSettlements(transactionId: string, limit?: number, start?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: Array<SettlementWithId>;
    }>;
    processCallback(body: string, settlementId: string, provider?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.ClientResponse;
        body: object;
    }>;
}
