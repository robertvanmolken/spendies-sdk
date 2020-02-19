"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SettlementWithId = (function () {
    function SettlementWithId() {
    }
    SettlementWithId.getAttributeTypeMap = function () {
        return SettlementWithId.attributeTypeMap;
    };
    SettlementWithId.discriminator = undefined;
    SettlementWithId.attributeTypeMap = [
        {
            "name": "settlementId",
            "baseName": "settlementId",
            "type": "string"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "SettlementWithId.MethodEnum"
        },
        {
            "name": "dateInitiated",
            "baseName": "dateInitiated",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "StatusEnum"
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
    return SettlementWithId;
}());
exports.SettlementWithId = SettlementWithId;
(function (SettlementWithId) {
    var MethodEnum;
    (function (MethodEnum) {
        MethodEnum[MethodEnum["Ideal"] = 'ideal'] = "Ideal";
        MethodEnum[MethodEnum["Crypto"] = 'crypto'] = "Crypto";
    })(MethodEnum = SettlementWithId.MethodEnum || (SettlementWithId.MethodEnum = {}));
})(SettlementWithId = exports.SettlementWithId || (exports.SettlementWithId = {}));
exports.SettlementWithId = SettlementWithId;
//# sourceMappingURL=settlementWithId.js.map