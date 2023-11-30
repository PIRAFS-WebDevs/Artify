import Licensing from "@/components/Help/Licensing/Licensing";
import HelpBar from "@/components/Shared/Help/HelpBar";
import Title from "@/components/Shared/Title/Title";
import React from "react";

const page = () => {
  return (
    <>
      <Title
        title={"All the legal bits"}
        subTitle={"Last updated on January 20, 2022"}
      />
      <section className="md:w-[80%] mx-auto md:flex p-5 bg-light-200 dark:bg-dark-400 rounded-sm ">
        <HelpBar />
        <section className="md:w-[70%]  px-5 py-10 dark:text-dark-100">
          <Licensing />
        </section>
      </section>
    </>
  );
};

export default page;
