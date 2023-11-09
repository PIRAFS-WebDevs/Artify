import React from "react";
import Qna from "./Qna";

const Help = () => {
  return (
    <>
      <section className="my-16  text-sm text-dark-100 ">
        <div className="text-center mb-10">
          <h4 className="text-2xl font-semibold dark:text-white">Help</h4>
          <p className="dark:text-dark-100">Frequently asked question</p>
        </div>
        <section className="w-[80%] mx-auto flex p-5  rounded ">
          <div className="w-[30%] bg-dark-400 px-5 py-10 text-dark-100 text-sm space-y-8">
            <p className="cursor-pointer hover:text-white">
              Licensing Agreement
            </p>
            <p className="cursor-pointer hover:text-white">
              Terms & Conditions
            </p>
            <p className="cursor-pointer hover:text-white">Privacy Policy</p>
          </div>
          <>
            <Qna></Qna>
          </>
        </section>
      </section>
    </>
  );
};

export default Help;
