/** @format */

import {
  WalletStatsData,
  WalletTransaction,
  AvailableBalanceData,
} from "@/types/WalletTypes";

export const walletStatsData: WalletStatsData[] = [
  {
    title: "Lock Contribution Balance",
    value: "$125",
    currency: "USD",
  },
  {
    title: "Expected payout",
    value: "$125",
    currency: "USD",
  },
  {
    title: "Referral Income",
    value: "$125",
    currency: "USD",
  },
];

export const availableBalanceData: AvailableBalanceData = {
  amount: "$500.00",
  change: "+50 this month",
};

export const contributionTransactions: WalletTransaction[] = [
  {
    id: "1",
    transactionId: "#TXN-88928",
    date: "Jan 05, 2026",
    group: "Holiday Savings 2026",
    amount: "-$500",
    status: "LOCKED",
  },
  {
    id: "2",
    transactionId: "#TXN-88928",
    date: "Jan 05, 2026",
    group: "Holiday Savings 2026",
    amount: "-$500",
    status: "LOCKED",
  },
  {
    id: "3",
    transactionId: "#TXN-88928",
    date: "Jan 05, 2026",
    group: "Holiday Savings 2026",
    amount: "-$500",
    status: "LOCKED",
  },
  {
    id: "4",
    transactionId: "#TXN-88928",
    date: "Jan 05, 2026",
    group: "Holiday Savings 2026",
    amount: "-$500",
    status: "LOCKED",
  },
];

export const referralsTransactions: WalletTransaction[] = [
  {
    id: "1",
    transactionId: "#TXN-88928",
    date: "Jan 05, 2026",
    group: "Referrals Bonus - user@jamie99",
    amount: "+$2",
    status: "AVAILABLE",
  },
  {
    id: "2",
    transactionId: "#TXN-88928",
    date: "Jan 05, 2026",
    group: "Referrals Bonus - user@jamie99",
    amount: "+$2",
    status: "AVAILABLE",
  },
  {
    id: "3",
    transactionId: "#TXN-88928",
    date: "Jan 05, 2026",
    group: "Referrals Bonus - user@jamie99",
    amount: "+$2",
    status: "AVAILABLE",
  },
  {
    id: "4",
    transactionId: "#TXN-88928",
    date: "Jan 05, 2026",
    group: "Referrals Bonus - user@jamie99",
    amount: "+$2",
    status: "AVAILABLE",
  },
];

export const payoutTransactions: WalletTransaction[] = [
  {
    id: "1",
    transactionId: "#TXN-88928",
    date: "Jan 05, 2026",
    group: "Holiday Savings 2026",
    amount: "+5000",
    status: "AVAILABLE",
  },
  {
    id: "2",
    transactionId: "#TXN-88928",
    date: "Jan 05, 2026",
    group: "Holiday Savings 2026",
    amount: "+5000",
    status: "AVAILABLE",
  },
  {
    id: "3",
    transactionId: "#TXN-88928",
    date: "Jan 05, 2026",
    group: "Holiday Savings 2026",
    amount: "+5000",
    status: "AVAILABLE",
  },
  {
    id: "4",
    transactionId: "#TXN-88928",
    date: "Jan 05, 2026",
    group: "Holiday Savings 2026",
    amount: "+5000",
    status: "AVAILABLE",
  },
];
