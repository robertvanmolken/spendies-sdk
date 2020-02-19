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
    return Settlement;
}());
exports.Settlement = Settlement;
(function (Settlement) {
    var MethodEnum;
    (function (MethodEnum) {
        MethodEnum[MethodEnum["Ideal"] = 'ideal'] = "Ideal";
        MethodEnum[MethodEnum["Crypto"] = 'crypto'] = "Crypto";
    })(MethodEnum = Settlement.MethodEnum || (Settlement.MethodEnum = {}));
})(Settlement = exports.Settlement || (exports.Settlement = {}));
exports.Settlement = Settlement;
//# sourceMappingURL=settlement.js.map