import AdminChart from "@/components/Dashboard/Admin/AdminDashboard/AdminChart";
import BestProducts from "@/components/Dashboard/Admin/AdminDashboard/BestProducts";
import RecentActivity from "@/components/Dashboard/Admin/AdminDashboard/RecentActivity";
import Stats from "@/components/Dashboard/Admin/AdminDashboard/Stats";
import React from "react";

const page = () => {
  return (
    <>
      <Stats />
      <AdminChart />
      <RecentActivity />
      <BestProducts />
    </>
  );
};

export default page;
