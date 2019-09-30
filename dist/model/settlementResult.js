"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SettlementResult = (function () {
    function SettlementResult() {
    }
    SettlementResult.getAttributeTypeMap = function () {
        return SettlementResult.attributeTypeMap;
    };
    SettlementResult.discriminator = undefined;
    SettlementResult.attributeTypeMap = [
        {
            "name": "settlementId",
            "baseName": "settlementId",
            "type": "string"
        },
        {
            "name": "paymentUrl",
            "baseName": "paymentUrl",
            "type": "string"
        }
    ];
    return SettlementResult;
}());
exports.SettlementResult = SettlementResult;
//# sourceMappingURL=settlementResult.js.map