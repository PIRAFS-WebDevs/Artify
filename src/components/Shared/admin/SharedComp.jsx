import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SharedComp = ({ type, AddType }) => {
  return (
    <div className="md:h-24 py-5 md:py-0 md:flex px-5 rounded border dark:border-dark-300 justify-center items-center dark:bg-dark-400 w-full md:mb-0">
      <div className="md:w-1/2 mb-5 md:mb-0 ">
        <p className="text-xl text-center md:text-start">{type}</p>
      </div>
      <form className=" md:w-1/2  ">
        <div className="md:flex gap-5 items-center justify-between">
          <div className="md:w-9/12 relative mb-5 md:mb-0">
            <IoSearchOutline className="absolute dark:text-gray-400 top-5 left-4" />
            <input
              type="text"
              className="bg-transparent h-14 w-full px-12 rounded dark:text-white border focus:outline-dark-300 "
              name=""
            />
          </div>

          <button className="h-14 md:w-auto w-full  px-5 bg-primary rounded font-semibold">
            + {AddType}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SharedComp;
