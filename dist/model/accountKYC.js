"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccountKYC = (function () {
    function AccountKYC() {
    }
    AccountKYC.getAttributeTypeMap = function () {
        return AccountKYC.attributeTypeMap;
    };
    AccountKYC.discriminator = undefined;
    AccountKYC.attributeTypeMap = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        }
    ];
    return AccountKYC;
}());
exports.AccountKYC = AccountKYC;
//# sourceMappingURL=accountKYC.js.map