"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BankCheck = (function () {
    function BankCheck() {
    }
    BankCheck.getAttributeTypeMap = function () {
        return BankCheck.attributeTypeMap;
    };
    BankCheck.discriminator = undefined;
    BankCheck.attributeTypeMap = [
        {
            "name": "method",
            "baseName": "method",
            "type": "BankCheck.MethodEnum"
        },
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "string"
        }
    ];
    return BankCheck;
}());
exports.BankCheck = BankCheck;
(function (BankCheck) {
    var MethodEnum;
    (function (MethodEnum) {
        MethodEnum[MethodEnum["Ideal"] = 'ideal'] = "Ideal";
    })(MethodEnum = BankCheck.MethodEnum || (BankCheck.MethodEnum = {}));
})(BankCheck = exports.BankCheck || (exports.BankCheck = {}));
exports.BankCheck = BankCheck;
//# sourceMappingURL=bankCheck.js.map