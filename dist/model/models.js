"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./account"));
__export(require("./accountCreate"));
__export(require("./accountInfo"));
__export(require("./accountKYC"));
__export(require("./accountResult"));
__export(require("./accountUpdate"));
__export(require("./bankCheck"));
__export(require("./errorError"));
__export(require("./linkedData"));
__export(require("./modelError"));
__export(require("./settlement"));
__export(require("./settlementCreate"));
__export(require("./settlementResult"));
__export(require("./settlementStatus"));
__export(require("./settlementWithId"));
__export(require("./settlementWithIdAllOf"));
__export(require("./settlerRecipient"));
__export(require("./signature"));
__export(require("./tokenPayload"));
__export(require("./tokenRequest"));
__export(require("./transaction"));
__export(require("./transactionResult"));
__export(require("./transactionWithId"));
__export(require("./transactionWithIdAllOf"));
__export(require("./wallet"));
__export(require("./walletResult"));
__export(require("./walletWithId"));
__export(require("./walletWithIdAllOf"));
var account_1 = require("./account");
var accountCreate_1 = require("./accountCreate");
var accountInfo_1 = require("./accountInfo");
var accountKYC_1 = require("./accountKYC");
var accountResult_1 = require("./accountResult");
var accountUpdate_1 = require("./accountUpdate");
var bankCheck_1 = require("./bankCheck");
var errorError_1 = require("./errorError");
var linkedData_1 = require("./linkedData");
var modelError_1 = require("./modelError");
var settlement_1 = require("./settlement");
var settlementCreate_1 = require("./settlementCreate");
var settlementResult_1 = require("./settlementResult");
var settlementStatus_1 = require("./settlementStatus");
var settlementWithId_1 = require("./settlementWithId");
var settlementWithIdAllOf_1 = require("./settlementWithIdAllOf");
var settlerRecipient_1 = require("./settlerRecipient");
var signature_1 = require("./signature");
var tokenPayload_1 = require("./tokenPayload");
var tokenRequest_1 = require("./tokenRequest");
var transaction_1 = require("./transaction");
var transactionResult_1 = require("./transactionResult");
var transactionWithId_1 = require("./transactionWithId");
var transactionWithIdAllOf_1 = require("./transactionWithIdAllOf");
var wallet_1 = require("./wallet");
var walletResult_1 = require("./walletResult");
var walletWithId_1 = require("./walletWithId");
var walletWithIdAllOf_1 = require("./walletWithIdAllOf");
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = {
    "AccountInfo.AuthLevelEnum": accountInfo_1.AccountInfo.AuthLevelEnum,
    "BankCheck.MethodEnum": bankCheck_1.BankCheck.MethodEnum,
    "Settlement.MethodEnum": settlement_1.Settlement.MethodEnum,
    "Settlement.StatusEnum": settlement_1.Settlement.StatusEnum,
    "SettlementCreate.MethodEnum": settlementCreate_1.SettlementCreate.MethodEnum,
    "SettlementStatus.StatusEnum": settlementStatus_1.SettlementStatus.StatusEnum,
    "SettlementWithId.MethodEnum": settlementWithId_1.SettlementWithId.MethodEnum,
    "SettlementWithId.StatusEnum": settlementWithId_1.SettlementWithId.StatusEnum,
    "Transaction.MethodEnum": transaction_1.Transaction.MethodEnum,
    "TransactionWithId.MethodEnum": transactionWithId_1.TransactionWithId.MethodEnum,
};
var typeMap = {
    "Account": account_1.Account,
    "AccountCreate": accountCreate_1.AccountCreate,
    "AccountInfo": accountInfo_1.AccountInfo,
    "AccountKYC": accountKYC_1.AccountKYC,
    "AccountResult": accountResult_1.AccountResult,
    "AccountUpdate": accountUpdate_1.AccountUpdate,
    "BankCheck": bankCheck_1.BankCheck,
    "ErrorError": errorError_1.ErrorError,
    "LinkedData": linkedData_1.LinkedData,
    "ModelError": modelError_1.ModelError,
    "Settlement": settlement_1.Settlement,
    "SettlementCreate": settlementCreate_1.SettlementCreate,
    "SettlementResult": settlementResult_1.SettlementResult,
    "SettlementStatus": settlementStatus_1.SettlementStatus,
    "SettlementWithId": settlementWithId_1.SettlementWithId,
    "SettlementWithIdAllOf": settlementWithIdAllOf_1.SettlementWithIdAllOf,
    "SettlerRecipient": settlerRecipient_1.SettlerRecipient,
    "Signature": signature_1.Signature,
    "TokenPayload": tokenPayload_1.TokenPayload,
    "TokenRequest": tokenRequest_1.TokenRequest,
    "Transaction": transaction_1.Transaction,
    "TransactionResult": transactionResult_1.TransactionResult,
    "TransactionWithId": transactionWithId_1.TransactionWithId,
    "TransactionWithIdAllOf": transactionWithIdAllOf_1.TransactionWithIdAllOf,
    "Wallet": wallet_1.Wallet,
    "WalletResult": walletResult_1.WalletResult,
    "WalletWithId": walletWithId_1.WalletWithId,
    "WalletWithIdAllOf": walletWithIdAllOf_1.WalletWithIdAllOf,
};
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
var HttpBasicAuth = (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var ApiKeyAuth = (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = (function () {
    function OAuth() {
        this.accessToken = '';
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map