"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaymentResult = (function () {
    function PaymentResult() {
    }
    PaymentResult.getAttributeTypeMap = function () {
        return PaymentResult.attributeTypeMap;
    };
    PaymentResult.discriminator = undefined;
    PaymentResult.attributeTypeMap = [
        {
            "name": "paymentId",
            "baseName": "paymentId",
            "type": "string"
        }
    ];
    return PaymentResult;
}());
exports.PaymentResult = PaymentResult;
//# sourceMappingURL=paymentResult.js.map