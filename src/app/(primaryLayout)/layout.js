import Navbar from "@/components/Shared/Navbar/Navbar";
import HomeFooter from "@/components/Shared/Footer/HomeFooter";

const layout = ({ children }) => {
  return (
    <main className="min-h-screen bg-darkPrimary relative ">
      <Navbar />
      {children}
      <HomeFooter />
    </main>
  );
};

export default layout;
