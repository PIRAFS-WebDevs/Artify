import Category from "@/components/Home/Category/Category";
import Content from "@/components/Home/Content/Content";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import React from "react";

const Home = () => {
  return (
    <section>
      <Category />
      <section>
        <Content />
      </section>
    </section>
  );
};

export default Home;
