"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./accountManagementApi"));
var accountManagementApi_1 = require("./accountManagementApi");
__export(require("./paymentManagementApi"));
var paymentManagementApi_1 = require("./paymentManagementApi");
__export(require("./walletManagementApi"));
var walletManagementApi_1 = require("./walletManagementApi");
exports.APIS = [accountManagementApi_1.AccountManagementApi, paymentManagementApi_1.PaymentManagementApi, walletManagementApi_1.WalletManagementApi];
//# sourceMappingURL=apis.js.map