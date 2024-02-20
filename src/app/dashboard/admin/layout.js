"use client";
import Navbar from "@/components/Shared/HomeNavbar/Navbar";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import AllStateContext from "@/context/AllStateContext";
import adminSideNav from "@/data/AdminSideNav";
import { useContext } from "react";

const adminLayout = ({ children }) => {
  const { sideBarOpen } = useContext(AllStateContext);

  return (
    <main className="relative min-h-screen dark:bg-dark-500 scrollbar">
      <Navbar />
      <Sidebar sidebarData={adminSideNav} />
      <section
        className={`relative ${
          !sideBarOpen ? "md:ml-[64px]" : "md:ml-[240px]"
        }`}
      >
        <div className="min-h-screen p-5 bg-light-300 dark:bg-dark-500">
          {children}
        </div>
      </section>
    </main>
  );
};

export default adminLayout;
