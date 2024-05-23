import AdminChart from "@/components/Dashboard/AdminDashboard/AdminChart";
import BestProducts from "@/components/Dashboard/AdminDashboard/BestProducts";
import RecentActivity from "@/components/Dashboard/AdminDashboard/RecentActivity";
import Stats from "@/components/Dashboard/AdminDashboard/Stats";
import { getProducts } from "@/utils/api/product";

const DashboardHomePage = async () => {
  const products = await getProducts();

  return (
    <>
      <Stats data={products.data} />
      <AdminChart data={products.data} />
      <RecentActivity data={products.data} />
      <BestProducts />
    </>
  );
};

export default DashboardHomePage;
