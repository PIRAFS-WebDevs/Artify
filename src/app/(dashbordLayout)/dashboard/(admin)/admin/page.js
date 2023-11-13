import AdminChart from "@/components/Dashboard/Admin/AdminChart";
import RecentActivity from "@/components/Dashboard/Admin/RecentActivity";
import Stats from "@/components/Dashboard/Admin/Stats";
import React from "react";

const page = () => {
  return (
    <>
      <Stats />
      <AdminChart />
      <RecentActivity />
    </>
  );
};

export default page;
