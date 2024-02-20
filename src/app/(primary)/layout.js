"use client";

import ProductModal from "@/components/Home/ProductModal/ProductModal";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/HomeNavbar/Navbar";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import homeSidebarData from "@/data/homeSidebarData";
import { useAllValueContext } from "@/hooks/useAllValueContext";

const layout = ({ children }) => {
  const { sidebarOpen, showProductModal, setShowProductModal } =
    useAllValueContext();

  return (
    <>
      <main className="relative min-h-screen dark:bg-dark-500 scrollbar">
        <Navbar />
        <Sidebar sidebarData={homeSidebarData} />
        <section
          className={`relative ${
            !sidebarOpen ? "md:ml-[64px]" : "md:ml-[240px]"
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
