/** @format */

"use client";

import React from "react";
import CustomTable from "@/components/CommonComponents/CustomTable";
import { ActiveGroup, TableColumn } from "@/types/DashboardTypes";

interface MyActiveGroupProps {
  groups: ActiveGroup[];
}

const columns: TableColumn[] = [
  { key: "groupName", label: "Group name", width: "25%" },
  { key: "contribution", label: "Contribution", width: "25%" },
  { key: "progress", label: "Progress", width: "25%" },
  { key: "status", label: "Status", width: "25%" },
];

export default function MyActiveGroup({ groups }: MyActiveGroupProps) {
  const renderCell = (item: ActiveGroup, columnKey: string) => {
    switch (columnKey) {
      case "groupName":
        return (
          <span className="font-medium text-gray-900">{item.groupName}</span>
        );
      case "contribution":
        return <span className="text-gray-700">{item.contribution}</span>;
      case "progress":
        return (
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-16 sm:w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-600 rounded-full"
                style={{ width: `${item.progress}%` }}
              />
            </div>
            <span className="text-xs sm:text-sm text-gray-700 whitespace-nowrap">
              {item.progress}%
            </span>
          </div>
        );
      case "status":
        return (
          <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-green-50 text-green-700">
            {item.status}
          </span>
        );
      default:
        return String(item[columnKey as keyof ActiveGroup]);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
        <div>
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">
            My Active Group
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            As a Leader, Total Group - {groups.length}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm text-gray-600">Member</span>
          <button className="text-green-700 font-medium text-xs sm:text-sm hover:text-green-800">
            Leader
          </button>
        </div>
      </div>
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <div className="inline-block min-w-full align-middle">
          <CustomTable
            columns={columns}
            data={groups}
            itemsPerPage={10}
            renderCell={renderCell}
          />
        </div>
      </div>
    </div>
  );
}
