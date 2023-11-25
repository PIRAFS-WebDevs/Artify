"use client";

import HomeNavbar from "@/components/Shared/HomeNavbar/HomeNavbar";
import Footer from "@/components/Shared/Footer/Footer";
import Cart from "@/components/Home/Cart/Cart";
import ProductModal from "@/components/Home/ProductModal/ProductModal";
import { useContext } from "react";
import AllStateContext from "@/context/AllStateContext";
import HomeSideBar from "@/components/Shared/Sidebar/HomeSidebar/HomeSideBar";
import SearchModal from "@/components/Home/SearchModal/SearchModal";

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
        <div className="px-6 min-h-min">{children}</div>
        <Footer />
      </section>
    </main>
  );
};

export default layout;
