/** @format */

export interface TableColumn {
  key: string;
  label: string;
  width?: string;
}

export interface StatsCardData {
  title: string;
  value: string;
  currency?: string;
  subtitle?: string;
  highlight?: string;
}

export interface MemberRequest {
  id: string;
  name: string;
  avatar: string;
  date: string;
  time: string;
}

export interface ActiveGroup {
  id: string;
  groupName: string;
  contribution: string;
  progress: number;
  status: string;
}

export interface NextContribution {
  groupName: string;
  amount: string;
  dueIn: string;
}
