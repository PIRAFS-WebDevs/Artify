import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/HomeFooter";

const layout = ({ children }) => {
  return (
    <main className="min-h-screen bg-darkPrimary relative ">
      <Navbar />

      <div className="mb-[64px]">{children}</div>

      <Footer />
    </main>
  );
};

export default layout;
