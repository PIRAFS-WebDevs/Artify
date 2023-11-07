import Navbar from "@/components/Shared/Navbar/Navbar";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import Footer from "@/components/Shared/Footer/HomeFooter";

const layout = ({ children }) => {
  return (
    <main className="min-h-screen bg-darkPrimary relative ">
      <Navbar />
      <section className="flex">
        <Sidebar />

        <div className="w-full mx-auto">{children}</div>
      </section>
      <Footer/>
    </main>
  );
};

export default layout;
