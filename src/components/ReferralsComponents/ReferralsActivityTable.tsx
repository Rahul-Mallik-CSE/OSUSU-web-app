/** @format */

"use client";

import React from "react";
import CustomTable from "@/components/CommonComponents/CustomTable";
import { TableColumn } from "@/types/AllTypes";
import { ReferralActivity } from "@/types/ReferralsTypes";

interface ReferralsActivityTableProps {
  data: ReferralActivity[];
}

export default function ReferralsActivityTable({
  data,
}: ReferralsActivityTableProps) {
  const columns: TableColumn[] = [
    { key: "userName", label: "User Name", width: "20%" },
    { key: "groupName", label: "Group Name", width: "25%" },
    { key: "joiningDate", label: "Joining Date", width: "20%" },
    { key: "rewards", label: "Rewards", width: "15%" },
    { key: "status", label: "Status", width: "20%" },
  ];

  const renderCell = (item: ReferralActivity, columnKey: string) => {
    switch (columnKey) {
      case "userName":
        return (
          <span className="text-gray-900 font-medium">{item.userName}</span>
        );
      case "groupName":
        return <span className="text-gray-700">{item.groupName}</span>;
      case "joiningDate":
        return <span className="text-gray-700">{item.joiningDate}</span>;
      case "rewards":
        return (
          <span className="text-green-600 font-semibold">{item.rewards}</span>
        );
      case "status":
        return (
          <span className="text-teal-600 font-semibold">{item.status}</span>
        );
      default:
        return String(item[columnKey as keyof ReferralActivity]);
    }
  };

  return (
    <div>
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
        Referrals Activity
      </h2>
      <CustomTable
        columns={columns}
        data={data}
        itemsPerPage={10}
        renderCell={renderCell}
      />
    </div>
  );
}
