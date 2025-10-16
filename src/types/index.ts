export interface Wallet {
    address: string;
    balance: number;
    isConnected: boolean;
}

export interface User {
    id: string;
    name: string;
    email: string;
    wallet: Wallet | null;
}