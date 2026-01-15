/** @format */

import React from "react";
import StatsCard from "@/components/CommonComponents/StatsCard";
import InviteNetwork from "@/components/ReferralsComponents/InviteNetwork";
import ReferralsActivityTable from "@/components/ReferralsComponents/ReferralsActivityTable";
import { referralStatsCards, referralActivities } from "@/data/ReferralsData";

const RefferalsPage = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="max-w-625 mx-auto p-3 sm:p-6 space-y-4 sm:space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {referralStatsCards.map((card, index) => (
            <StatsCard key={index} data={card} />
          ))}
        </div>

        {/* Invite Network Section */}
        <InviteNetwork />

        {/* Referrals Activity Table */}
        <ReferralsActivityTable data={referralActivities} />
      </div>
    </div>
  );
};

export default RefferalsPage;
