/** @format */

"use client";

import React from "react";
import { StatsCardData } from "@/types/DashboardTypes";

interface StatsCardProps {
  data: StatsCardData;
}

export default function StatsCard({ data }: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h3 className="text-gray-600 text-sm font-medium mb-2">{data.title}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-gray-900">{data.value}</span>
        {data.currency && (
          <span className="text-gray-600 text-sm">{data.currency}</span>
        )}
        {data.highlight && (
          <span className="text-green-600 text-sm font-medium">
            {data.highlight}
          </span>
        )}
      </div>
      {data.subtitle && (
        <p className="text-gray-500 text-sm mt-1">{data.subtitle}</p>
      )}
    </div>
  );
}
