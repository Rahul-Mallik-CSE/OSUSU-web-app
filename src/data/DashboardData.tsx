/** @format */

import {
  StatsCardData,
  MemberRequest,
  ActiveGroup,
  NextContribution,
} from "@/types/DashboardTypes";

export const statsData: StatsCardData[] = [
  {
    title: "Total Savings",
    value: "$125",
    currency: "USD",
  },
  {
    title: "Total Payout Received",
    value: "$125",
    currency: "USD",
  },
  {
    title: "Referral Income",
    value: "$125",
    highlight: "+50 this month",
  },
  {
    title: "Active Group",
    value: "12",
    subtitle: "9 joined, 3 created",
  },
];

export const nextContributionData: NextContribution = {
  groupName: "Family Saving Cycle",
  amount: "$500.00",
  dueIn: "Due in 2 Days",
};

export const memberRequests: MemberRequest[] = [
  {
    id: "1",
    name: "Bulbu Hasan",
    avatar: "/avatar-placeholder.png",
    date: "25, Feb 2026",
    time: "9:00 AM",
  },
  {
    id: "2",
    name: "Bulbu Hasan",
    avatar: "/avatar-placeholder.png",
    date: "25, Feb 2026",
    time: "9:00 AM",
  },
  {
    id: "3",
    name: "Bulbu Hasan",
    avatar: "/avatar-placeholder.png",
    date: "25, Feb 2026",
    time: "9:00 AM",
  },
  {
    id: "4",
    name: "Bulbu Hasan",
    avatar: "/avatar-placeholder.png",
    date: "25, Feb 2026",
    time: "9:00 AM",
  },
];

export const activeGroupsData: ActiveGroup[] = [
  {
    id: "1",
    groupName: "Family Savings",
    contribution: "$500/mo",
    progress: 75,
    status: "Ongoing",
  },
  {
    id: "2",
    groupName: "Family Savings",
    contribution: "$500/mo",
    progress: 100,
    status: "Ongoing",
  },
  {
    id: "3",
    groupName: "Family Savings",
    contribution: "$500/mo",
    progress: 100,
    status: "Ongoing",
  },
  {
    id: "4",
    groupName: "Family Savings",
    contribution: "$500/mo",
    progress: 100,
    status: "Ongoing",
  },
];
