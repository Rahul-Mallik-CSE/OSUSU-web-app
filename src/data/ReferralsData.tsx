/** @format */

import { ReferralActivity, ReferralStats } from "@/types/ReferralsTypes";
import { StatsCardData } from "@/types/AllTypes";

export const referralStats: ReferralStats = {
  totalEarning: "$125",
  totalReferrals: "$125",
  perReferrals: "$2",
};

export const referralStatsCards: StatsCardData[] = [
  {
    title: "Total Earning",
    value: "$125",
    currency: "USD",
  },
  {
    title: "Total Referrals",
    value: "$125",
    currency: "USD",
  },
  {
    title: "Per Referrals",
    value: "$2",
    currency: "USD",
  },
];

export const referralActivities: ReferralActivity[] = [
  {
    id: "1",
    userName: "user@jamie99",
    groupName: "Holiday Savings 2026",
    joiningDate: "Jan 05, 2026",
    rewards: "+$2",
    status: "CREDITED",
  },
  {
    id: "2",
    userName: "user@jamie99",
    groupName: "Holiday Savings 2026",
    joiningDate: "Jan 05, 2026",
    rewards: "+$2",
    status: "CREDITED",
  },
  {
    id: "3",
    userName: "user@jamie99",
    groupName: "Holiday Savings 2026",
    joiningDate: "Jan 05, 2026",
    rewards: "+$2",
    status: "CREDITED",
  },
  {
    id: "4",
    userName: "user@jamie99",
    groupName: "Holiday Savings 2026",
    joiningDate: "Jan 05, 2026",
    rewards: "+$2",
    status: "CREDITED",
  },
  {
    id: "5",
    userName: "user@jamie99",
    groupName: "Holiday Savings 2026",
    joiningDate: "Jan 05, 2026",
    rewards: "+$2",
    status: "CREDITED",
  },
];
