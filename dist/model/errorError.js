"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorError = (function () {
    function ErrorError() {
    }
    ErrorError.getAttributeTypeMap = function () {
        return ErrorError.attributeTypeMap;
    };
    ErrorError.discriminator = undefined;
    ErrorError.attributeTypeMap = [
        {
            "name": "statusCode",
            "baseName": "statusCode",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "Array<object>"
        }
    ];
    return ErrorError;
}());
exports.ErrorError = ErrorError;
//# sourceMappingURL=errorError.js.map