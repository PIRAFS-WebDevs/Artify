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
      <section className="w-[80%] mx-auto flex p-5 bg-dark-500  rounded mb-10">
        <HelpBar />
        <section className="w-[70%] bg-dark-350 px-5 py-10">
          <Terms />
        </section>
      </section>
    </>
  );
};

export default termsPage;
