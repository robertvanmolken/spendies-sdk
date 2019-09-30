"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./accountManagementApi"));
var accountManagementApi_1 = require("./accountManagementApi");
__export(require("./settlementManagementApi"));
var settlementManagementApi_1 = require("./settlementManagementApi");
__export(require("./transactionManagementApi"));
var transactionManagementApi_1 = require("./transactionManagementApi");
__export(require("./walletManagementApi"));
var walletManagementApi_1 = require("./walletManagementApi");
exports.APIS = [accountManagementApi_1.AccountManagementApi, settlementManagementApi_1.SettlementManagementApi, transactionManagementApi_1.TransactionManagementApi, walletManagementApi_1.WalletManagementApi];
//# sourceMappingURL=apis.js.map