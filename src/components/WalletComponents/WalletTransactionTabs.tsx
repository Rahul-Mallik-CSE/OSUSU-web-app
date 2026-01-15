/** @format */

"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomTable from "@/components/CommonComponents/CustomTable";
import { WalletTransaction } from "@/types/WalletTypes";
import { TableColumn } from "@/types/AllTypes";

interface WalletTransactionTabsProps {
  contributionData: WalletTransaction[];
  referralsData: WalletTransaction[];
  payoutData: WalletTransaction[];
}

const columns: TableColumn[] = [
  { key: "transactionId", label: "Transaction ID", width: "20%" },
  { key: "date", label: "Date", width: "20%" },
  { key: "group", label: "Group / Description", width: "35%" },
  { key: "amount", label: "Amount", width: "15%" },
  { key: "status", label: "Status", width: "10%" },
];

export default function WalletTransactionTabs({
  contributionData,
  referralsData,
  payoutData,
}: WalletTransactionTabsProps) {
  const renderCell = (item: WalletTransaction, columnKey: string) => {
    switch (columnKey) {
      case "transactionId":
        return (
          <span className="text-gray-900 font-medium text-xs sm:text-sm">
            {item.transactionId}
          </span>
        );
      case "date":
        return (
          <span className="text-gray-700 text-xs sm:text-sm">{item.date}</span>
        );
      case "group":
        return (
          <span className="text-gray-700 text-xs sm:text-sm">{item.group}</span>
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
      case "status":
        const statusColors = {
          LOCKED: "bg-red-50 text-red-700",
          AVAILABLE: "bg-green-50 text-green-700",
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
        return String(item[columnKey as keyof WalletTransaction]);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
        Transaction
      </h2>

      <Tabs defaultValue="contribution" className="w-full ">
        <TabsList className="grid  h-12  grid-cols-3 mb-6 bg-gray-100 p-1 rounded-lg">
          <TabsTrigger
            value="contribution"
            className="text-xs sm:text-sm data-[state=active]:bg-white data-[state=active]:text-gray-900 px-3 sm:px-6 py-2"
          >
            Contribution
          </TabsTrigger>
          <TabsTrigger
            value="referrals"
            className="text-xs sm:text-sm data-[state=active]:bg-white data-[state=active]:text-gray-900 px-3 sm:px-6 py-2"
          >
            Referrals Earning
          </TabsTrigger>
          <TabsTrigger
            value="payout"
            className="text-xs sm:text-sm data-[state=active]:bg-white data-[state=active]:text-gray-900 px-3 sm:px-6 py-2"
          >
            Payout
          </TabsTrigger>
        </TabsList>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="inline-block min-w-full align-middle">
            <TabsContent value="contribution" className="mt-0">
              <CustomTable
                columns={columns}
                data={contributionData}
                itemsPerPage={10}
                renderCell={renderCell}
              />
            </TabsContent>

            <TabsContent value="referrals" className="mt-0">
              <CustomTable
                columns={columns}
                data={referralsData}
                itemsPerPage={10}
                renderCell={renderCell}
              />
            </TabsContent>

            <TabsContent value="payout" className="mt-0">
              <CustomTable
                columns={columns}
                data={payoutData}
                itemsPerPage={10}
                renderCell={renderCell}
              />
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
