import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/HomeFooter";

const layout = ({ children }) => {
  return (
    <main className="min-h-screen bg-darkPrimary relative ">
      <Navbar />
      <section className="flex">
        <div className="w-full mx-auto">{children}</div>
      </section>
      <Footer/>
    </main>
  );
};

export default layout;
