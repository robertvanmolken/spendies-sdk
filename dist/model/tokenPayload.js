"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TokenPayload = (function () {
    function TokenPayload() {
    }
    TokenPayload.getAttributeTypeMap = function () {
        return TokenPayload.attributeTypeMap;
    };
    TokenPayload.discriminator = undefined;
    TokenPayload.attributeTypeMap = [
        {
            "name": "iss",
            "baseName": "iss",
            "type": "string"
        },
        {
            "name": "sub",
            "baseName": "sub",
            "type": "string"
        },
        {
            "name": "dev",
            "baseName": "dev",
            "type": "string"
        },
        {
            "name": "exp",
            "baseName": "exp",
            "type": "number"
        },
        {
            "name": "iat",
            "baseName": "iat",
            "type": "number"
        }
    ];
    return TokenPayload;
}());
exports.TokenPayload = TokenPayload;
//# sourceMappingURL=tokenPayload.js.map