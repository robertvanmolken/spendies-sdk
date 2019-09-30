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
            "type": "SettlementStatus.StatusEnum"
        }
    ];
    return SettlementStatus;
}());
exports.SettlementStatus = SettlementStatus;
(function (SettlementStatus) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Open"] = 'open'] = "Open";
        StatusEnum[StatusEnum["Pending"] = 'pending'] = "Pending";
        StatusEnum[StatusEnum["Cancelled"] = 'cancelled'] = "Cancelled";
        StatusEnum[StatusEnum["Completed"] = 'completed'] = "Completed";
        StatusEnum[StatusEnum["Expired"] = 'expired'] = "Expired";
        StatusEnum[StatusEnum["Refunded"] = 'refunded'] = "Refunded";
    })(StatusEnum = SettlementStatus.StatusEnum || (SettlementStatus.StatusEnum = {}));
})(SettlementStatus = exports.SettlementStatus || (exports.SettlementStatus = {}));
exports.SettlementStatus = SettlementStatus;
//# sourceMappingURL=settlementStatus.js.map