import Footer from "@/components/Shared/Footer/Footer";
import RootNavbar from "@/components/Shared/RootNavbar/RootNavbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <RootNavbar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
