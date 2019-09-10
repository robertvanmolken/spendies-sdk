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
__export(require("./errorError"));
__export(require("./linkedAccount"));
__export(require("./modelError"));
__export(require("./originatorRecipient"));
__export(require("./payment"));
__export(require("./paymentResult"));
__export(require("./paymentWithId"));
__export(require("./paymentWithIdAllOf"));
__export(require("./signature"));
__export(require("./tokenPayload"));
__export(require("./tokenRequest"));
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
var errorError_1 = require("./errorError");
var linkedAccount_1 = require("./linkedAccount");
var modelError_1 = require("./modelError");
var originatorRecipient_1 = require("./originatorRecipient");
var payment_1 = require("./payment");
var paymentResult_1 = require("./paymentResult");
var paymentWithId_1 = require("./paymentWithId");
var paymentWithIdAllOf_1 = require("./paymentWithIdAllOf");
var signature_1 = require("./signature");
var tokenPayload_1 = require("./tokenPayload");
var tokenRequest_1 = require("./tokenRequest");
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
    "Payment.TypeEnum": payment_1.Payment.TypeEnum,
    "PaymentWithId.TypeEnum": paymentWithId_1.PaymentWithId.TypeEnum,
};
var typeMap = {
    "Account": account_1.Account,
    "AccountCreate": accountCreate_1.AccountCreate,
    "AccountInfo": accountInfo_1.AccountInfo,
    "AccountKYC": accountKYC_1.AccountKYC,
    "AccountResult": accountResult_1.AccountResult,
    "AccountUpdate": accountUpdate_1.AccountUpdate,
    "ErrorError": errorError_1.ErrorError,
    "LinkedAccount": linkedAccount_1.LinkedAccount,
    "ModelError": modelError_1.ModelError,
    "OriginatorRecipient": originatorRecipient_1.OriginatorRecipient,
    "Payment": payment_1.Payment,
    "PaymentResult": paymentResult_1.PaymentResult,
    "PaymentWithId": paymentWithId_1.PaymentWithId,
    "PaymentWithIdAllOf": paymentWithIdAllOf_1.PaymentWithIdAllOf,
    "Signature": signature_1.Signature,
    "TokenPayload": tokenPayload_1.TokenPayload,
    "TokenRequest": tokenRequest_1.TokenRequest,
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