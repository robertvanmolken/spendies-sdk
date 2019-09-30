"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SettlementCreate = (function () {
    function SettlementCreate() {
    }
    SettlementCreate.getAttributeTypeMap = function () {
        return SettlementCreate.attributeTypeMap;
    };
    SettlementCreate.discriminator = undefined;
    SettlementCreate.attributeTypeMap = [
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "string"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "SettlementCreate.MethodEnum"
        },
        {
            "name": "dateInitiated",
            "baseName": "dateInitiated",
            "type": "Date"
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
        }
    ];
    return SettlementCreate;
}());
exports.SettlementCreate = SettlementCreate;
(function (SettlementCreate) {
    var MethodEnum;
    (function (MethodEnum) {
        MethodEnum[MethodEnum["Ideal"] = 'ideal'] = "Ideal";
        MethodEnum[MethodEnum["Crypto"] = 'crypto'] = "Crypto";
    })(MethodEnum = SettlementCreate.MethodEnum || (SettlementCreate.MethodEnum = {}));
})(SettlementCreate = exports.SettlementCreate || (exports.SettlementCreate = {}));
exports.SettlementCreate = SettlementCreate;
//# sourceMappingURL=settlementCreate.js.map