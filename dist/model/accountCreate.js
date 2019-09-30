"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccountCreate = (function () {
    function AccountCreate() {
    }
    AccountCreate.getAttributeTypeMap = function () {
        return AccountCreate.attributeTypeMap;
    };
    AccountCreate.discriminator = undefined;
    AccountCreate.attributeTypeMap = [
        {
            "name": "account",
            "baseName": "account",
            "type": "Account"
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "Wallet"
        }
    ];
    return AccountCreate;
}());
exports.AccountCreate = AccountCreate;
//# sourceMappingURL=accountCreate.js.map