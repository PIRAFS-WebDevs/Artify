import Category from "@/components/Home/Category/Category";
import Content from "@/components/Home/Content/Content";
import HomeFooter from "@/components/Shared/Footer/HomeFooter";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import React from "react";

const Home = () => {
  return (
    <section>
      <Category />
      <section className=" top-20">
        <Content />
      </section>
    </section>
  );
};

export default Home;
