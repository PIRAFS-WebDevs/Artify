"use client";

import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/HomeNavbar/Navbar";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import adminSideNav from "@/data/AdminSideNav";
import { useAllValueContext } from "@/hooks/useAllValueContext";

const AdminLayout = ({ children }) => {
  const { sidebarOpen } = useAllValueContext();

  return (
    <>
      <main className="relative min-h-screen dark:bg-dark-500 scrollbar">
        <Navbar />
        <Sidebar sidebarData={adminSideNav} />
        <section
          className={`relative ${
            !sidebarOpen ? "md:ml-[64px]" : "md:ml-[14rem]"
          }`}
        >
          <div className="min-h-screen p-6 bg-light-300 dark:bg-dark-500">
            {children}
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
};

export default AdminLayout;
