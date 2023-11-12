import HelpBar from "@/components/Shared/Help/HelpBar";
import Navbar from "@/components/Shared/Navbar/Navbar";

const layout = ({ children }) => {
  return (
    <main className="min-h-screen dark:bg-dark-500 relative dark:text-dark-100 text-sm  ">
      <Navbar />

      <section className="mt-14">{children}</section>
    </main>
  );
};

export default layout;
