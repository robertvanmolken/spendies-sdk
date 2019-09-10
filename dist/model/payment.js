"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Payment = (function () {
    function Payment() {
    }
    Payment.getAttributeTypeMap = function () {
        return Payment.attributeTypeMap;
    };
    Payment.discriminator = undefined;
    Payment.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "Payment.TypeEnum"
        },
        {
            "name": "dateInitiated",
            "baseName": "dateInitiated",
            "type": "string"
        },
        {
            "name": "reasonForPayment",
            "baseName": "reasonForPayment",
            "type": "string"
        },
        {
            "name": "targetCurrency",
            "baseName": "targetCurrency",
            "type": "string"
        },
        {
            "name": "targetAmount",
            "baseName": "targetAmount",
            "type": "number"
        },
        {
            "name": "sourceCurrency",
            "baseName": "sourceCurrency",
            "type": "string"
        },
        {
            "name": "sourceAmount",
            "baseName": "sourceAmount",
            "type": "number"
        },
        {
            "name": "expectedPayments",
            "baseName": "expectedPayments",
            "type": "number"
        },
        {
            "name": "recipients",
            "baseName": "Recipients",
            "type": "Array<OriginatorRecipient>"
        },
        {
            "name": "originators",
            "baseName": "Originators",
            "type": "Array<OriginatorRecipient>"
        }
    ];
    return Payment;
}());
exports.Payment = Payment;
(function (Payment) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Receive"] = 'receive'] = "Receive";
        TypeEnum[TypeEnum["Give"] = 'give'] = "Give";
    })(TypeEnum = Payment.TypeEnum || (Payment.TypeEnum = {}));
})(Payment = exports.Payment || (exports.Payment = {}));
exports.Payment = Payment;
//# sourceMappingURL=payment.js.map