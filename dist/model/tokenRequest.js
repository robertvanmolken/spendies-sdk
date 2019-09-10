"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TokenRequest = (function () {
    function TokenRequest() {
    }
    TokenRequest.getAttributeTypeMap = function () {
        return TokenRequest.attributeTypeMap;
    };
    TokenRequest.discriminator = undefined;
    TokenRequest.attributeTypeMap = [
        {
            "name": "signature",
            "baseName": "signature",
            "type": "string"
        },
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
    return TokenRequest;
}());
exports.TokenRequest = TokenRequest;
//# sourceMappingURL=tokenRequest.js.map