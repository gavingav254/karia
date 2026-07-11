import TopNavigation from "../components/common/TopNavigation";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import OverviewCards from "../components/dashboard/OverviewCards";
import AISuggestions from "../components/dashboard/AISuggestions";
import QuickActions from "../components/dashboard/QuickActions";
import RecentActivity from "../components/dashboard/RecentActivity";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#050816] text-white px-8 py-10">

      <TopNavigation title="Dashboard" />

      <DashboardHeader />

      <OverviewCards />

      <AISuggestions />

      <QuickActions />

      <RecentActivity />

    </main>
  );
}