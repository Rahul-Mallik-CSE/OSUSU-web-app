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
          <div className="flex items-center gap-2">
            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-600 rounded-full"
                style={{ width: `${item.progress}%` }}
              />
            </div>
            <span className="text-sm text-gray-700">{item.progress}%</span>
          </div>
        );
      case "status":
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-50 text-green-700">
            {item.status}
          </span>
        );
      default:
        return String(item[columnKey as keyof ActiveGroup]);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            My Active Group
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            As a Leader, Total Group - {groups.length}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Member</span>
          <button className="text-green-700 font-medium text-sm hover:text-green-800">
            Leader
          </button>
        </div>
      </div>
      <CustomTable
        columns={columns}
        data={groups}
        itemsPerPage={10}
        renderCell={renderCell}
      />
    </div>
  );
}
