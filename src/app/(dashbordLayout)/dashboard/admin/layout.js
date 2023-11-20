import AdminNavbar from "@/components/Shared/admin/AdminNavbar/AdminNavbar";
import AdminSideBar from "@/components/Shared/admin/AdminSideBar/AdminSideBar";
import React from "react";

const adminLayout = ({ children }) => {
  return (
    <main className="relative w-full dark:text-white ">
      <AdminNavbar />

      <section className="lg:flex ">
        {/* <section className=" lg:w-[15%] dark:bg-dark-400 z-50 bottom-0 top-[4.5rem] fixed overflow-y-auto scrollbar text-xs">
        </section> */}
        <AdminSideBar />
        <section className="lg:w-[85%] w-full min-h-screen p-6 lg:ml-[15%]">
          {children}
        </section>
      </section>
    </main>
  );
};

export default adminLayout;
