"use client";
import HomeNavbar from "@/components/Shared/HomeNavbar/HomeNavbar";
import Footer from "@/components/Shared/Footer/Footer";
import Cart from "@/components/Home/Cart/Cart";
import ProductModal from "@/components/Home/ProductModal/ProductModal";
import { useContext } from "react";
import AllStateContext from "@/context/AllStateContext";
import HomeSideBar from "@/components/Shared/Sidebar/HomeSidebar/HomeSideBar";

const layout = ({ children }) => {
  const { sideBarOpen, isShow, setIsShow } = useContext(AllStateContext);
  return (
    <main className="relative min-h-screen dark:bg-dark-500 ">
      <HomeNavbar />
      <HomeSideBar />
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
