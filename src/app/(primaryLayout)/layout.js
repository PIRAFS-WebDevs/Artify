import Navbar from "@/components/Shared/Navbar/Navbar";
import HomeFooter from "@/components/Shared/Footer/HomeFooter";
import Cart from "@/components/Home/Cart/Cart";

const layout = ({ children }) => {
  return (
    <main className="min-h-screen bg-darkPrimary relative ">
      <Navbar />
      {children}
      <HomeFooter />
      <Cart/>
    </main>
  );
};

export default layout;
