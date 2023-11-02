import Navbar from "@/components/Shared/Navbar/Navbar";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";

const layout = ({ children }) => {
  return (
    <main className="bg-darkPrimary min-h-[100vh] ">
      <Navbar />
      <section className="grid grid-cols-6">
        <Sidebar />
        <div className="col-span-5">

        {children}
        </div>
      </section>
    </main>
  );
};

export default layout;
