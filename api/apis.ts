export * from './accountManagementApi';
import { AccountManagementApi } from './accountManagementApi';
export * from './settlementManagementApi';
import { SettlementManagementApi } from './settlementManagementApi';
export * from './transactionManagementApi';
import { TransactionManagementApi } from './transactionManagementApi';
export * from './walletManagementApi';
import { WalletManagementApi } from './walletManagementApi';
export const APIS = [AccountManagementApi, SettlementManagementApi, TransactionManagementApi, WalletManagementApi];
