/** @format */

"use client";

import React from "react";
import StatsCard from "@/components/CommonComponents/StatsCard";
import AvailableBalance from "@/components/WalletComponents/AvailableBalance";
import WalletTransactionTabs from "@/components/WalletComponents/WalletTransactionTabs";
import {
  walletStatsData,
  availableBalanceData,
  contributionTransactions,
  referralsTransactions,
  payoutTransactions,
} from "@/data/WalletData";

const WalletPage = () => {
  // Convert wallet stats to StatsCard format
  const statsCardData = walletStatsData.map((stat) => ({
    title: stat.title,
    value: stat.value,
    currency: stat.currency,
  }));

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6">
          {statsCardData.map((stat, index) => (
            <StatsCard key={index} data={stat} />
          ))}
        </div>

        {/* Available Balance Section */}
        <div className="mb-6">
          <AvailableBalance data={availableBalanceData} />
        </div>

        {/* Transaction Tabs */}
        <WalletTransactionTabs
          contributionData={contributionTransactions}
          referralsData={referralsTransactions}
          payoutData={payoutTransactions}
        />
      </div>
    </div>
  );
};

export default WalletPage;
