/** @format */

"use client";

import React from "react";
import { StatsCardData } from "@/types/DashboardTypes";

interface StatsCardProps {
  data: StatsCardData;
}

export default function StatsCard({ data }: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 shadow-sm">
      <h3 className="text-gray-600 text-sm sm:text-base font-medium mb-1 sm:mb-2">
        {data.title}
      </h3>
      <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
        <span className="text-xl sm:text-2xl font-bold text-gray-900">
          {data.value}
        </span>
        {data.currency && (
          <span className="text-green-600 text-sm sm:text-base">
            {data.currency}
          </span>
        )}
        {data.highlight && (
          <span className="text-green-600 text-sm sm:text-base font-medium">
            {data.highlight}
          </span>
        )}
        {data.subtitle && (
          <p className="text-green-600 text-sm sm:text-base font-semibold">
            {data.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
