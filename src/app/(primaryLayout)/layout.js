"use client";
import Navbar from "@/components/Shared/Navbar/Navbar";
import HomeFooter from "@/components/Shared/Footer/HomeFooter";
import Cart from "@/components/Home/Cart/Cart";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import ProductModal from "@/components/Home/ProductModal/ProductModal";
import { useContext } from "react";
import AllStateContext from "@/context/AllStateContext";

const layout = ({ children }) => {
  const { sideBarOpen, isShow, setIsShow } = useContext(AllStateContext);
  return (
    <main className="min-h-screen dark:bg-dark-500 relative ">
      <Navbar />
      <Sidebar />
      <section className={`${!sideBarOpen ? "md:ml-20" : "md:ml-[240px]"}`}>
        {children}
        <ProductModal isShow={isShow} setIsShow={setIsShow} />
        <HomeFooter />
        <Cart />
      </section>
    </main>
  );
};

export default layout;
