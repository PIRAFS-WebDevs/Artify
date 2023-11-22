import SettingsSidebar from "@/components/Settings/SettingsSidebar/SettingsSidebar";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/HomeNavbar/HomeNavbar";
import React from "react";

const settingLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <section className="px-4 py-6 md:py-10">
        <div className="bg-transparent md:bg-dark-400 text-white max-w-6xl min-h-[600px] relative flex flex-col md:flex-row mx-auto">
          <SettingsSidebar />
          <div className="md:p-8 p-4 w-full">{children}</div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default settingLayout;
