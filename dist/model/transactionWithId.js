"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionWithId = (function () {
    function TransactionWithId() {
    }
    TransactionWithId.getAttributeTypeMap = function () {
        return TransactionWithId.attributeTypeMap;
    };
    TransactionWithId.discriminator = undefined;
    TransactionWithId.attributeTypeMap = [
        {
            "name": "transactionId",
            "baseName": "transactionId",
            "type": "string"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "TransactionWithId.MethodEnum"
        },
        {
            "name": "dateInitiated",
            "baseName": "dateInitiated",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "StatusEnum"
        },
        {
            "name": "reasonForTransaction",
            "baseName": "reasonForTransaction",
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
            "name": "expectedSettlements",
            "baseName": "expectedSettlements",
            "type": "number"
        },
        {
            "name": "recipients",
            "baseName": "recipients",
            "type": "Array<SettlerRecipient>"
        },
        {
            "name": "settlers",
            "baseName": "settlers",
            "type": "Array<SettlerRecipient>"
        }
    ];
    return TransactionWithId;
}());
exports.TransactionWithId = TransactionWithId;
(function (TransactionWithId) {
    var MethodEnum;
    (function (MethodEnum) {
        MethodEnum[MethodEnum["Request"] = 'request'] = "Request";
        MethodEnum[MethodEnum["Sent"] = 'sent'] = "Sent";
    })(MethodEnum = TransactionWithId.MethodEnum || (TransactionWithId.MethodEnum = {}));
})(TransactionWithId = exports.TransactionWithId || (exports.TransactionWithId = {}));
exports.TransactionWithId = TransactionWithId;
//# sourceMappingURL=transactionWithId.js.map