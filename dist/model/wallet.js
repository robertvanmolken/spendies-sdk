"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Wallet = (function () {
    function Wallet() {
    }
    Wallet.getAttributeTypeMap = function () {
        return Wallet.attributeTypeMap;
    };
    Wallet.discriminator = undefined;
    Wallet.attributeTypeMap = [
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
    return Wallet;
}());
exports.Wallet = Wallet;
//# sourceMappingURL=wallet.js.map