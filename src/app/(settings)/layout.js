import Sidebar from "@/components/Settings/Sidebar";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

const settingLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <section className="px-4 py-8">
        <div className="bg-dark-400 text-white max-w-6xl min-h-[600px] flex flex-col md:flex-row mx-auto">
          <Sidebar />
          <div className="p-10">{children}</div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default settingLayout;
