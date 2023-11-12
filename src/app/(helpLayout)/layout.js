import HelpBar from "@/components/Shared/Help/HelpBar";
import Navbar from "@/components/Shared/Navbar/Navbar";

const layout = ({ children }) => {
  return (
    <main className="min-h-screen bg-dark-500 relative text-dark-100 text-sm ">
      <Navbar />

      <section>{children}</section>
    </main>
  );
};

export default layout;
