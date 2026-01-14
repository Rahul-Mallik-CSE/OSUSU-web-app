/** @format */

export interface LedgerStatsData {
  title: string;
  value: string;
  currency: string;
}

export interface Transaction {
  id: string;
  date: string;
  type: "Contribution" | "Rewards" | "Payout" | "Penalty";
  groupDescription: string;
  amount: string;
  balance: string;
  status: "COMPLETED" | "PENDING" | "FAILED";
}

export interface FilterOption {
  label: string;
  value: string;
}
