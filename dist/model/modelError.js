"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ModelError = (function () {
    function ModelError() {
    }
    ModelError.getAttributeTypeMap = function () {
        return ModelError.attributeTypeMap;
    };
    ModelError.discriminator = undefined;
    ModelError.attributeTypeMap = [
        {
            "name": "error",
            "baseName": "error",
            "type": "ErrorError"
        }
    ];
    return ModelError;
}());
exports.ModelError = ModelError;
//# sourceMappingURL=modelError.js.map