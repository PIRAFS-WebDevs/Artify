"use client";

import HomeNavbar from "@/components/Shared/HomeNavbar/HomeNavbar";
import Footer from "@/components/Shared/Footer/Footer";
import { useContext } from "react";
import AllStateContext from "@/context/AllStateContext";
import HomeSideBar from "@/components/Shared/Sidebar/HomeSidebar/HomeSideBar";
import ProductModal from "@/components/Home/ProductModal/ProductModal";

const layout = ({ children }) => {
  const { sideBarOpen, showProductModal, setShowProductModal } =
    useContext(AllStateContext);

  return (
    <>
      <main className="relative min-h-screen dark:bg-dark-500 scrollbar">
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
      <ProductModal
        showProductModal={showProductModal}
        setShowProductModal={setShowProductModal}
      />
    </>
  );
};

export default layout;
