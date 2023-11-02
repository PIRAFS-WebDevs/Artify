import Navbar from "@/components/Shared/Navbar/Navbar";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <main className="bg-darkPrimary min-h-[100vh] ">
      <Navbar />
      <section className="grid grid-cols-6">
        <Sidebar />
        {children}
      </section>
    </main>
  );
};

export default layout;
