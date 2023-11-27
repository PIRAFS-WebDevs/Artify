import Footer from "@/components/Shared/Footer/Footer";
import RootNavbar from "@/components/Shared/RootNavbar/RootNavbar";
import React from "react";

const RegisterLayout = ({ children }) => {
  return (
    <section className="md:w-[80%] mx-auto">
      <RootNavbar />
      {children}
      <Footer />
    </section>
  );
};

export default RegisterLayout;
