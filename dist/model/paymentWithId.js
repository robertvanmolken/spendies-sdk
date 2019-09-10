"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaymentWithId = (function () {
    function PaymentWithId() {
    }
    PaymentWithId.getAttributeTypeMap = function () {
        return PaymentWithId.attributeTypeMap;
    };
    PaymentWithId.discriminator = undefined;
    PaymentWithId.attributeTypeMap = [
        {
            "name": "paymentId",
            "baseName": "paymentId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PaymentWithId.TypeEnum"
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
    return PaymentWithId;
}());
exports.PaymentWithId = PaymentWithId;
(function (PaymentWithId) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Receive"] = 'receive'] = "Receive";
        TypeEnum[TypeEnum["Give"] = 'give'] = "Give";
    })(TypeEnum = PaymentWithId.TypeEnum || (PaymentWithId.TypeEnum = {}));
})(PaymentWithId = exports.PaymentWithId || (exports.PaymentWithId = {}));
exports.PaymentWithId = PaymentWithId;
//# sourceMappingURL=paymentWithId.js.map