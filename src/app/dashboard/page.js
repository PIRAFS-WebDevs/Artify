import AdminChart from "@/components/Dashboard/AdminDashboard/AdminChart";
import BestProducts from "@/components/Dashboard/AdminDashboard/BestProducts";
import RecentActivity from "@/components/Dashboard/AdminDashboard/RecentActivity";
import Stats from "@/components/Dashboard/AdminDashboard/Stats";

const DashboardHomePage = () => {
  return (
    <>
      <Stats />
      <AdminChart />
      <RecentActivity />
      <BestProducts />
    </>
  );
};

export default DashboardHomePage;
