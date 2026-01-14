/** @format */

"use client";

import React from "react";
import { NextContribution } from "@/types/DashboardTypes";

interface NextContributionDueProps {
  data: NextContribution;
}

export default function NextContributionDue({
  data,
}: NextContributionDueProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Next Contribution Due
      </h2>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-700 text-base">
            {data.groupName}{" "}
            <span className="font-semibold text-gray-900">{data.amount}</span>
          </p>
          <p className="text-red-500 text-sm mt-1">{data.dueIn}</p>
        </div>
        <button className="bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-2.5 rounded-lg transition-colors">
          Pay Now
        </button>
      </div>
    </div>
  );
}
