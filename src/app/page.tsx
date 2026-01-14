/** @format */

import StatsCard from "@/components/CommonComponents/StatsCard";
import NextContributionDue from "@/components/DashboardComponents/NextContributionDue";
import NewMemberRequest from "@/components/DashboardComponents/NewMemberRequest";
import MyActiveGroup from "@/components/DashboardComponents/MyActiveGroup";
import DashboardMenu from "@/components/DashboardComponents/DashboardMenu";
import {
  statsData,
  nextContributionData,
  memberRequests,
  activeGroupsData,
} from "@/data/DashboardData";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {statsData.map((stat, index) => (
            <StatsCard key={index} data={stat} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar Menu */}
          <div className="lg:col-span-1">
            <DashboardMenu />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Next Contribution Due */}
            <NextContributionDue data={nextContributionData} />

            {/* New Member Request */}
            <NewMemberRequest requests={memberRequests} />

            {/* My Active Group */}
            <MyActiveGroup groups={activeGroupsData} />
          </div>
        </div>
      </div>
    </div>
  );
}
