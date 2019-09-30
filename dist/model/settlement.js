"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Settlement = (function () {
    function Settlement() {
    }
    Settlement.getAttributeTypeMap = function () {
        return Settlement.attributeTypeMap;
    };
    Settlement.discriminator = undefined;
    Settlement.attributeTypeMap = [
        {
            "name": "method",
            "baseName": "method",
            "type": "Settlement.MethodEnum"
        },
        {
            "name": "dateInitiated",
            "baseName": "dateInitiated",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Settlement.StatusEnum"
        },
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "linkedTx",
            "baseName": "linkedTx",
            "type": "string"
        }
    ];
    return Settlement;
}());
exports.Settlement = Settlement;
(function (Settlement) {
    var MethodEnum;
    (function (MethodEnum) {
        MethodEnum[MethodEnum["Ideal"] = 'ideal'] = "Ideal";
        MethodEnum[MethodEnum["Crypto"] = 'crypto'] = "Crypto";
    })(MethodEnum = Settlement.MethodEnum || (Settlement.MethodEnum = {}));
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Open"] = 'open'] = "Open";
        StatusEnum[StatusEnum["Pending"] = 'pending'] = "Pending";
        StatusEnum[StatusEnum["Cancelled"] = 'cancelled'] = "Cancelled";
        StatusEnum[StatusEnum["Completed"] = 'completed'] = "Completed";
        StatusEnum[StatusEnum["Expired"] = 'expired'] = "Expired";
        StatusEnum[StatusEnum["Refunded"] = 'refunded'] = "Refunded";
    })(StatusEnum = Settlement.StatusEnum || (Settlement.StatusEnum = {}));
})(Settlement = exports.Settlement || (exports.Settlement = {}));
exports.Settlement = Settlement;
//# sourceMappingURL=settlement.js.map