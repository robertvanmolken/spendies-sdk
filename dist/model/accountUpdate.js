"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccountUpdate = (function () {
    function AccountUpdate() {
    }
    AccountUpdate.getAttributeTypeMap = function () {
        return AccountUpdate.attributeTypeMap;
    };
    AccountUpdate.discriminator = undefined;
    AccountUpdate.attributeTypeMap = [
        {
            "name": "signature",
            "baseName": "signature",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        }
    ];
    return AccountUpdate;
}());
exports.AccountUpdate = AccountUpdate;
//# sourceMappingURL=accountUpdate.js.map