"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction = (function () {
    function Transaction() {
    }
    Transaction.getAttributeTypeMap = function () {
        return Transaction.attributeTypeMap;
    };
    Transaction.discriminator = undefined;
    Transaction.attributeTypeMap = [
        {
            "name": "method",
            "baseName": "method",
            "type": "Transaction.MethodEnum"
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
    return Transaction;
}());
exports.Transaction = Transaction;
(function (Transaction) {
    var MethodEnum;
    (function (MethodEnum) {
        MethodEnum[MethodEnum["Request"] = 'request'] = "Request";
        MethodEnum[MethodEnum["Sent"] = 'sent'] = "Sent";
    })(MethodEnum = Transaction.MethodEnum || (Transaction.MethodEnum = {}));
})(Transaction = exports.Transaction || (exports.Transaction = {}));
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map