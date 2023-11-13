import AdminNavbar from "@/components/Shared/admin/AdminNavbar/AdminNavbar";
import AdminSideBar from "@/components/Shared/admin/AdminSideBar/AdminSideBar";
import React from "react";

const adminLayout = ({ children }) => {
  return (
    <main className="w-full relative dark:text-white ">
      <AdminNavbar />

      <section className="lg:flex ">
        <section className=" w-[15%] dark:bg-dark-400 z-50  fixed overflow-y-auto text-xs">
          <AdminSideBar />
        </section>
        <section className="lg:w-[85%] w-full  min-h-screen  pt-5 px-5  md:pt-10 lg:ml-[15%]">
          {children}
        </section>
      </section>
    </main>
  );
};

export default adminLayout;
