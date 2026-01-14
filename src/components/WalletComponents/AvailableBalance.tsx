/** @format */

"use client";

import React from "react";
import { AvailableBalanceData } from "@/types/WalletTypes";
import { Button } from "@/components/ui/button";

interface AvailableBalanceProps {
  data: AvailableBalanceData;
}

export default function AvailableBalance({ data }: AvailableBalanceProps) {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">
            Available Balance
          </h2>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-700">
              {data.amount}
            </span>
          </div>
          <p className="text-green-600 text-sm sm:text-base font-medium">
            {data.change}
          </p>
        </div>
        <Button className="bg-green-700 hover:bg-green-800 text-white font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto">
          Withdraw Now
        </Button>
      </div>
    </div>
  );
}
