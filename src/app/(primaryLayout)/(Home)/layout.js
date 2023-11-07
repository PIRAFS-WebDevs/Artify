import HomeFooter from "@/components/Shared/Footer/HomeFooter";
import Footer from "@/components/Shared/Footer/HomeFooter";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";

const layout = ({ children }) => {
  return (
    <main className="min-h-screen bg-darkPrimary relative ">
      <Sidebar />
      <section className="xl:ml-[240px] "> {children}</section>
    </main>
  );
};

export default layout;
