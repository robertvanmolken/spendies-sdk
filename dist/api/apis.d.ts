export * from './accountManagementApi';
import { AccountManagementApi } from './accountManagementApi';
export * from './paymentManagementApi';
import { PaymentManagementApi } from './paymentManagementApi';
export * from './walletManagementApi';
import { WalletManagementApi } from './walletManagementApi';
export declare const APIS: (typeof AccountManagementApi | typeof PaymentManagementApi | typeof WalletManagementApi)[];
