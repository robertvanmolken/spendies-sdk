"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Signature = (function () {
    function Signature() {
    }
    Signature.getAttributeTypeMap = function () {
        return Signature.attributeTypeMap;
    };
    Signature.discriminator = undefined;
    Signature.attributeTypeMap = [
        {
            "name": "uniqueId",
            "baseName": "uniqueId",
            "type": "string"
        },
        {
            "name": "userAgent",
            "baseName": "userAgent",
            "type": "string"
        },
        {
            "name": "ipAddress",
            "baseName": "ipAddress",
            "type": "string"
        }
    ];
    return Signature;
}());
exports.Signature = Signature;
//# sourceMappingURL=signature.js.map