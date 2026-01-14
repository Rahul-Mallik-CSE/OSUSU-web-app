/** @format */

"use client";

import React, { useState } from "react";
import StatsCard from "@/components/CommonComponents/StatsCard";
import FilterDropdown from "@/components/LedgerComponents/FilterDropdown";
import TransactionsTable from "@/components/LedgerComponents/TransactionsTable";
import {
  ledgerStatsData,
  transactions,
  typeFilterOptions,
  dateFilterOptions,
  groupFilterOptions,
} from "@/data/LedgerData";

const LedgePage = () => {
  const [typeFilter, setTypeFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("30");
  const [groupFilter, setGroupFilter] = useState("");

  // Convert ledger stats to StatsCard format
  const statsCardData = ledgerStatsData.map((stat) => ({
    title: stat.title,
    value: stat.value,
    currency: stat.currency,
  }));

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="max-w-625 mx-auto p-3 sm:p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
          {statsCardData.map((stat, index) => (
            <StatsCard key={index} data={stat} />
          ))}
        </div>

        {/* All Transaction Section */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
            All Transaction
          </h2>

          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
            <FilterDropdown
              label="Type"
              options={typeFilterOptions}
              value={typeFilter}
              onChange={setTypeFilter}
            />
            <FilterDropdown
              label="Date Range"
              options={dateFilterOptions}
              value={dateFilter}
              onChange={setDateFilter}
            />
            <FilterDropdown
              label="Group"
              options={groupFilterOptions}
              value={groupFilter}
              onChange={setGroupFilter}
            />
          </div>

          {/* Transactions Table */}
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
              <TransactionsTable transactions={transactions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LedgePage;
