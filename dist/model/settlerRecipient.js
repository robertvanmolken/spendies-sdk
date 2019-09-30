"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SettlerRecipient = (function () {
    function SettlerRecipient() {
    }
    SettlerRecipient.getAttributeTypeMap = function () {
        return SettlerRecipient.attributeTypeMap;
    };
    SettlerRecipient.discriminator = undefined;
    SettlerRecipient.attributeTypeMap = [
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
            "type": "LinkedData"
        }
    ];
    return SettlerRecipient;
}());
exports.SettlerRecipient = SettlerRecipient;
//# sourceMappingURL=settlerRecipient.js.map