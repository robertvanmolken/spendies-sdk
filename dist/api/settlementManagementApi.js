"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var localVarRequest = require("request");
var models_1 = require("../model/models");
var models_2 = require("../model/models");
var models_3 = require("../model/models");
var defaultBasePath = 'https://virtserver.swaggerhub.com/robertvanmolken/SpendiesAPI/1.0';
var SettlementManagementApiApiKeys;
(function (SettlementManagementApiApiKeys) {
    SettlementManagementApiApiKeys[SettlementManagementApiApiKeys["apiKeyAuth"] = 0] = "apiKeyAuth";
})(SettlementManagementApiApiKeys = exports.SettlementManagementApiApiKeys || (exports.SettlementManagementApiApiKeys = {}));
var SettlementManagementApi = (function () {
    function SettlementManagementApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new models_1.VoidAuth(),
            'apiKeyAuth': new models_2.ApiKeyAuth('header', 'CT-Api-Key'),
            'bearerAuth': new models_3.HttpBasicAuth(),
        };
        if (password) {
            this.username = basePathOrUsername;
            this.password = password;
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(SettlementManagementApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettlementManagementApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    SettlementManagementApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    SettlementManagementApi.prototype.setApiKey = function (key, value) {
        this.authentications[SettlementManagementApiApiKeys[key]].apiKey = value;
    };
    Object.defineProperty(SettlementManagementApi.prototype, "username", {
        set: function (username) {
            this.authentications.bearerAuth.username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettlementManagementApi.prototype, "password", {
        set: function (password) {
            this.authentications.bearerAuth.password = password;
        },
        enumerable: true,
        configurable: true
    });
    SettlementManagementApi.prototype.createSettlement = function (settlementCreate, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/settlements';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                localVarFormParams = {};
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(settlementCreate, "SettlementCreate")
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.apiKeyAuth.applyToRequest(localVarRequestOptions); });
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    body = models_1.ObjectSerializer.deserialize(body, "SettlementResult");
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject({ response: response, body: body });
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    SettlementManagementApi.prototype.getSettlement = function (settlementId, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/settlements/{settlementId}'
                    .replace('{' + 'settlementId' + '}', encodeURIComponent(String(settlementId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                localVarFormParams = {};
                if (settlementId === null || settlementId === undefined) {
                    throw new Error('Required parameter settlementId was null or undefined when calling getSettlement.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.apiKeyAuth.applyToRequest(localVarRequestOptions); });
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    body = models_1.ObjectSerializer.deserialize(body, "Settlement");
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject({ response: response, body: body });
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    SettlementManagementApi.prototype.getSettlements = function (transactionId, limit, start, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/settlements';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                localVarFormParams = {};
                if (transactionId === null || transactionId === undefined) {
                    throw new Error('Required parameter transactionId was null or undefined when calling getSettlements.');
                }
                if (transactionId !== undefined) {
                    localVarQueryParameters['transactionId'] = models_1.ObjectSerializer.serialize(transactionId, "string");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (start !== undefined) {
                    localVarQueryParameters['start'] = models_1.ObjectSerializer.serialize(start, "number");
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.apiKeyAuth.applyToRequest(localVarRequestOptions); });
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.bearerAuth.applyToRequest(localVarRequestOptions); });
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    body = models_1.ObjectSerializer.deserialize(body, "Array<SettlementWithId>");
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject({ response: response, body: body });
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    SettlementManagementApi.prototype.processCallback = function (body, settlementId, provider, options) {
        if (options === void 0) { options = { headers: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise;
            var _this = this;
            return __generator(this, function (_a) {
                localVarPath = this.basePath + '/settlements/{settlementId}/callback'
                    .replace('{' + 'settlementId' + '}', encodeURIComponent(String(settlementId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this.defaultHeaders);
                localVarFormParams = {};
                if (body === null || body === undefined) {
                    throw new Error('Required parameter body was null or undefined when calling processCallback.');
                }
                if (settlementId === null || settlementId === undefined) {
                    throw new Error('Required parameter settlementId was null or undefined when calling processCallback.');
                }
                if (provider !== undefined) {
                    localVarQueryParameters['provider'] = models_1.ObjectSerializer.serialize(provider, "string");
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(body, "string")
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                return [2, authenticationPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            localVarRequest(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    body = models_1.ObjectSerializer.deserialize(body, "object");
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject({ response: response, body: body });
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    return SettlementManagementApi;
}());
exports.SettlementManagementApi = SettlementManagementApi;
//# sourceMappingURL=settlementManagementApi.js.map