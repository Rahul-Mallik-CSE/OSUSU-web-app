/** @format */

"use client";

import React, { useState } from "react";
import CustomTable from "@/components/CommonComponents/CustomTable";
import { Transaction } from "@/types/LedgerTypes";
import { TableColumn } from "@/types/AllTypes";

interface TransactionsTableProps {
  transactions: Transaction[];
}

const columns: TableColumn[] = [
  { key: "date", label: "Date", width: "15%" },
  { key: "type", label: "Type", width: "15%" },
  { key: "groupDescription", label: "Group/Description", width: "30%" },
  { key: "amount", label: "Amount", width: "15%" },
  { key: "balance", label: "Balance", width: "15%" },
  { key: "status", label: "Status", width: "10%" },
];

export default function TransactionsTable({
  transactions,
}: TransactionsTableProps) {
  const renderCell = (item: Transaction, columnKey: string) => {
    switch (columnKey) {
      case "date":
        return (
          <span className="text-gray-700 text-xs sm:text-sm">{item.date}</span>
        );
      case "type":
        const typeColors: Record<string, string> = {
          Contribution: "text-blue-700",
          Rewards: "text-green-700",
          Payout: "text-purple-700",
          Penalty: "text-red-700",
        };
        return (
          <span
            className={`font-medium text-xs sm:text-sm ${
              typeColors[item.type]
            }`}
          >
            {item.type}
          </span>
        );
      case "groupDescription":
        return (
          <span className="text-gray-700 text-xs sm:text-sm">
            {item.groupDescription}
          </span>
        );
      case "amount":
        const isNegative = item.amount.startsWith("-");
        return (
          <span
            className={`font-semibold text-xs sm:text-sm ${
              isNegative ? "text-red-600" : "text-green-600"
            }`}
          >
            {item.amount}
          </span>
        );
      case "balance":
        return (
          <span className="text-gray-900 font-medium text-xs sm:text-sm">
            {item.balance}
          </span>
        );
      case "status":
        const statusColors: Record<string, string> = {
          COMPLETED: "bg-green-50 text-green-700",
          PENDING: "bg-yellow-50 text-yellow-700",
          FAILED: "bg-red-50 text-red-700",
        };
        return (
          <span
            className={`inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium ${
              statusColors[item.status]
            }`}
          >
            {item.status}
          </span>
        );
      default:
        return String(item[columnKey as keyof Transaction]);
    }
  };

  return (
    <CustomTable
      columns={columns}
      data={transactions}
      itemsPerPage={10}
      renderCell={renderCell}
    />
  );
}
