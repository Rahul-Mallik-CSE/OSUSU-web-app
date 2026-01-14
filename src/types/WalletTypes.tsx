/** @format */

export interface WalletStatsData {
  title: string;
  value: string;
  currency: string;
}

export interface WalletTransaction {
  id: string;
  transactionId: string;
  date: string;
  group: string;
  amount: string;
  status: "LOCKED" | "AVAILABLE";
}

export interface AvailableBalanceData {
  amount: string;
  change: string;
}

export type TransactionTab = "contribution" | "referrals" | "payout";
