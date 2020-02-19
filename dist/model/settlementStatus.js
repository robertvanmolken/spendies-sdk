"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SettlementStatus = (function () {
    function SettlementStatus() {
    }
    SettlementStatus.getAttributeTypeMap = function () {
        return SettlementStatus.attributeTypeMap;
    };
    SettlementStatus.discriminator = undefined;
    SettlementStatus.attributeTypeMap = [
        {
            "name": "settlementId",
            "baseName": "settlementId",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "StatusEnum"
        }
    ];
    return SettlementStatus;
}());
exports.SettlementStatus = SettlementStatus;
//# sourceMappingURL=settlementStatus.js.map