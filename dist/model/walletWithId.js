"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WalletWithId = (function () {
    function WalletWithId() {
    }
    WalletWithId.getAttributeTypeMap = function () {
        return WalletWithId.attributeTypeMap;
    };
    WalletWithId.discriminator = undefined;
    WalletWithId.attributeTypeMap = [
        {
            "name": "walletId",
            "baseName": "walletId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        }
    ];
    return WalletWithId;
}());
exports.WalletWithId = WalletWithId;
//# sourceMappingURL=walletWithId.js.map