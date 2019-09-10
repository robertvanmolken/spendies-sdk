"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedAccount = (function () {
    function LinkedAccount() {
    }
    LinkedAccount.getAttributeTypeMap = function () {
        return LinkedAccount.attributeTypeMap;
    };
    LinkedAccount.discriminator = undefined;
    LinkedAccount.attributeTypeMap = [
        {
            "name": "linkedAccount",
            "baseName": "linkedAccount",
            "type": "string"
        },
        {
            "name": "linkedWallet",
            "baseName": "linkedWallet",
            "type": "string"
        }
    ];
    return LinkedAccount;
}());
exports.LinkedAccount = LinkedAccount;
//# sourceMappingURL=linkedAccount.js.map