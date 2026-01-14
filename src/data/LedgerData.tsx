/** @format */

import {
  LedgerStatsData,
  Transaction,
  FilterOption,
} from "@/types/LedgerTypes";

export const ledgerStatsData: LedgerStatsData[] = [
  {
    title: "Total In",
    value: "$125",
    currency: "USD",
  },
  {
    title: "Total Out",
    value: "$125",
    currency: "USD",
  },
  {
    title: "Total Lock Balance",
    value: "$1225",
    currency: "USD",
  },
  {
    title: "Total Available Balance",
    value: "$1125",
    currency: "USD",
  },
];

export const transactions: Transaction[] = [
  {
    id: "1",
    date: "Jan 05, 2026",
    type: "Contribution",
    groupDescription: "Holiday Savings 2026",
    amount: "-$500",
    balance: "-$5000",
    status: "COMPLETED",
  },
  {
    id: "2",
    date: "Jan 05, 2026",
    type: "Rewards",
    groupDescription: "Referrals Bonus - user@jamie99",
    amount: "+$2",
    balance: "-$5000",
    status: "COMPLETED",
  },
  {
    id: "3",
    date: "Jan 05, 2026",
    type: "Payout",
    groupDescription: "Holiday Savings 2026",
    amount: "-$5000",
    balance: "-$5000",
    status: "COMPLETED",
  },
  {
    id: "4",
    date: "Jan 05, 2026",
    type: "Penalty",
    groupDescription: "Let Fee - Holiday Savings 2026",
    amount: "+$25",
    balance: "-$5000",
    status: "COMPLETED",
  },
];

export const typeFilterOptions: FilterOption[] = [
  { label: "All Entries", value: "all" },
  { label: "Contribution", value: "contribution" },
  { label: "Rewards", value: "rewards" },
  { label: "Payout", value: "payout" },
  { label: "Penalty", value: "penalty" },
];

export const dateFilterOptions: FilterOption[] = [
  { label: "Last 30 Days", value: "30" },
  { label: "Last 7 Days", value: "7" },
  { label: "Last 90 Days", value: "90" },
  { label: "All Time", value: "all" },
];

export const groupFilterOptions: FilterOption[] = [
  { label: "Select Group", value: "" },
  { label: "Holiday Savings 2026", value: "holiday-2026" },
  { label: "Family Savings", value: "family-savings" },
];
