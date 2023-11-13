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
      <section className="w-[80%] mx-auto flex p-5 dark:bg-dark-500  rounded mb-10">
        <HelpBar />
        <section className="w-[70%] dark:bg-dark-350 px-5 py-10 dark:text-dark-100">
          <Licensing />
        </section>
      </section>
    </>
  );
};

export default page;
