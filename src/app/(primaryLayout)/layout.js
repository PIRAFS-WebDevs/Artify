"use client";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
import Cart from "@/components/Home/Cart/Cart";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import ProductModal from "@/components/Home/ProductModal/ProductModal";
import { useContext } from "react";
import AllStateContext from "@/context/AllStateContext";

const layout = ({ children }) => {
  const { sideBarOpen, isShow, setIsShow } = useContext(AllStateContext);
  return (
    <main className="relative min-h-screen dark:bg-dark-500 ">
      <Navbar />
      <Sidebar />
      <section
        className={` relative ${
          !sideBarOpen ? "md:ml-[64px]" : "md:ml-[240px]"
        }`}
      >
        <div className="px-6">{children}</div>
        <ProductModal isShow={isShow} setIsShow={setIsShow} />
        <Footer />
        <Cart />
      </section>
    </main>
  );
};

export default layout;
