import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/HomeNavbar/Navbar";

const RegisterLayout = ({ children }) => {
  return (
    <section>
      <Navbar />
      {children}
      <div className="container mx-auto">
        <Footer />
      </div>
    </section>
  );
};

export default RegisterLayout;
