"use client";

import HomeNavbar from "@/components/Shared/HomeNavbar/HomeNavbar";
import Footer from "@/components/Shared/Footer/Footer";
import { useContext } from "react";
import AllStateContext from "@/context/AllStateContext";
import HomeSideBar from "@/components/Shared/Sidebar/HomeSidebar/HomeSideBar";

const layout = ({ children }) => {
  const { sideBarOpen } = useContext(AllStateContext);

  return (
    <main className="relative min-h-screen scrollbar dark:bg-dark-500 ">
      <HomeNavbar />
      <HomeSideBar />
      <section
        className={`relative ${
          !sideBarOpen ? "md:ml-[64px]" : "md:ml-[240px]"
        }`}
      >
        <div className="min-h-screen">{children}</div>
        <Footer />
      </section>
    </main>
  );
};

export default layout;
