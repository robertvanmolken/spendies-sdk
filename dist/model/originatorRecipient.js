"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OriginatorRecipient = (function () {
    function OriginatorRecipient() {
    }
    OriginatorRecipient.getAttributeTypeMap = function () {
        return OriginatorRecipient.attributeTypeMap;
    };
    OriginatorRecipient.discriminator = undefined;
    OriginatorRecipient.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "LinkedAccount"
        }
    ];
    return OriginatorRecipient;
}());
exports.OriginatorRecipient = OriginatorRecipient;
//# sourceMappingURL=originatorRecipient.js.map