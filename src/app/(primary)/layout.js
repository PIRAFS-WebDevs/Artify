"use client";
import homeSidebarData from "@/data/homeSidebarData";
import Footer from "@/components/Shared/Footer/Footer";
import { useContext } from "react";
import AllStateContext from "@/context/AllStateContext";
import ProductModal from "@/components/Home/ProductModal/ProductModal";
import Sidebar from "@/components/Shared/Sidebar/Sidebar/Sidebar";
import Navbar from "@/components/Shared/HomeNavbar/Navbar";

const layout = ({ children }) => {
  const { sideBarOpen, showProductModal, setShowProductModal } =
    useContext(AllStateContext);

  return (
    <>
      <main className="relative min-h-screen dark:bg-dark-500 scrollbar">
        <Navbar />
        <Sidebar sidebarData={homeSidebarData} />
        <section
          className={`relative ${
            !sideBarOpen ? "md:ml-[64px]" : "md:ml-[240px]"
          }`}
        >
          <div className="min-h-screen bg-light-300 dark:bg-dark-500">
            {children}
          </div>
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
