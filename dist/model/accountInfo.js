"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccountInfo = (function () {
    function AccountInfo() {
    }
    AccountInfo.getAttributeTypeMap = function () {
        return AccountInfo.attributeTypeMap;
    };
    AccountInfo.discriminator = undefined;
    AccountInfo.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        },
        {
            "name": "authLevel",
            "baseName": "authLevel",
            "type": "AccountInfo.AuthLevelEnum"
        },
        {
            "name": "wallets",
            "baseName": "wallets",
            "type": "Array<WalletWithId>"
        }
    ];
    return AccountInfo;
}());
exports.AccountInfo = AccountInfo;
(function (AccountInfo) {
    var AuthLevelEnum;
    (function (AuthLevelEnum) {
        AuthLevelEnum[AuthLevelEnum["NUMBER_0"] = 0] = "NUMBER_0";
        AuthLevelEnum[AuthLevelEnum["NUMBER_1"] = 1] = "NUMBER_1";
        AuthLevelEnum[AuthLevelEnum["NUMBER_2"] = 2] = "NUMBER_2";
        AuthLevelEnum[AuthLevelEnum["NUMBER_3"] = 3] = "NUMBER_3";
    })(AuthLevelEnum = AccountInfo.AuthLevelEnum || (AccountInfo.AuthLevelEnum = {}));
})(AccountInfo = exports.AccountInfo || (exports.AccountInfo = {}));
exports.AccountInfo = AccountInfo;
//# sourceMappingURL=accountInfo.js.map