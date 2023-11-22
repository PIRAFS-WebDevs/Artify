import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/HomeNavbar/HomeNavbar";
import React from "react";

const RegisterLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default RegisterLayout;
