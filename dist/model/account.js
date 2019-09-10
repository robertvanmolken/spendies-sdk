"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Account = (function () {
    function Account() {
    }
    Account.getAttributeTypeMap = function () {
        return Account.attributeTypeMap;
    };
    Account.discriminator = undefined;
    Account.attributeTypeMap = [
        {
            "name": "signature",
            "baseName": "signature",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }
    ];
    return Account;
}());
exports.Account = Account;
//# sourceMappingURL=account.js.map