import AdminChart from "@/components/Dashboard/Admin/AdminChart";
import BestProducts from "@/components/Dashboard/Admin/BestProducts";
import RecentActivity from "@/components/Dashboard/Admin/RecentActivity";
import Stats from "@/components/Dashboard/Admin/Stats";
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
