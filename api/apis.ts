export * from './accountManagementApi';
import { AccountManagementApi } from './accountManagementApi';
export * from './paymentManagementApi';
import { PaymentManagementApi } from './paymentManagementApi';
export * from './walletManagementApi';
import { WalletManagementApi } from './walletManagementApi';
export const APIS = [AccountManagementApi, PaymentManagementApi, WalletManagementApi];
