"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedData = (function () {
    function LinkedData() {
    }
    LinkedData.getAttributeTypeMap = function () {
        return LinkedData.attributeTypeMap;
    };
    LinkedData.discriminator = undefined;
    LinkedData.attributeTypeMap = [
        {
            "name": "linkedAccount",
            "baseName": "linkedAccount",
            "type": "string"
        },
        {
            "name": "linkedWallet",
            "baseName": "linkedWallet",
            "type": "string"
        },
        {
            "name": "linkedSettlement",
            "baseName": "linkedSettlement",
            "type": "SettlementStatus"
        }
    ];
    return LinkedData;
}());
exports.LinkedData = LinkedData;
//# sourceMappingURL=linkedData.js.map