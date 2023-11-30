import Footer from "@/components/Shared/Footer/Footer";
import RootNavbar from "@/components/Shared/RootNavbar/RootNavbar";
import React from "react";

const RegisterLayout = ({ children }) => {
  return (
    <section>
      <RootNavbar />
      {children}
      <div className="container mx-auto">
        <Footer />
      </div>
    </section>
  );
};

export default RegisterLayout;
