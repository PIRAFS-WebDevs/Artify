import HelpBar from "@/components/Shared/Help/HelpBar";
import Title from "@/components/Shared/Title/Title";
import Terms from "@/components/Help/Terms/Terms";
import React from "react";

const termsPage = () => {
  return (
    <>
      <Title
        title={"Terms and Conditions"}
        subTitle={"Last updated on January 20, 2022"}
      />
      <section className="md:w-[80%] mx-auto md:flex p-5 dark:bg-dark-500  rounded mb-10">
        <HelpBar />
        <section className="md:w-[70%] dark:bg-dark-400 px-5 py-10 dark:text-dark-100">
          <Terms />
        </section>
      </section>
    </>
  );
};

export default termsPage;
