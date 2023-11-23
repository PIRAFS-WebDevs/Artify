import SettingsSidebar from "@/components/Settings/SettingsSidebar/SettingsSidebar";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/HomeNavbar/HomeNavbar";
import React from "react";

const settingLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen px-4 py-6 md:py-10 gird place-items-center">
        <div className="bg-transparent md:bg-dark-400 text-white max-w-7xl min-h-[700px] relative flex flex-col md:flex-row mx-auto">
          <SettingsSidebar />
          <div className="w-full p-4 md:p-8">{children}</div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default settingLayout;
