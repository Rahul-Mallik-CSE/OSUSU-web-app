/** @format */

"use client";

import React from "react";
import { NextContribution } from "@/types/DashboardTypes";
import { Button } from "../ui/button";

interface NextContributionDueProps {
  data: NextContribution;
}

export default function NextContributionDue({
  data,
}: NextContributionDueProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 shadow-sm h-full flex flex-col justify-center">
      <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
        Next Contribution Due
      </h2>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div className="flex-1">
          <p className="text-gray-700 text-sm sm:text-base">
            {data.groupName}{" "}
            <span className="font-semibold text-gray-900">{data.amount}</span>
          </p>
          <p className="text-red-500 text-xs sm:text-sm mt-1">{data.dueIn}</p>
        </div>
        <Button className="bg-green-700 hover:bg-green-800 text-white font-medium px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-colors w-full sm:w-auto text-sm sm:text-base">
          Pay Now
        </Button>
      </div>
    </div>
  );
}
