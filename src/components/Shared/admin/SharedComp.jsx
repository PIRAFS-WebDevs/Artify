import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SharedComp = () => {
  return (
    <div className="h-24 flex px-5 rounded border dark:border-dark-300 justify-center items-center dark:bg-dark-400 w-full">
      <div className="w-1/2">
        <p>Layout Type</p>
      </div>
      <form className="relative w-1/2 ">
        <div className="flex items-center">
          <IoSearchOutline className="absolute fa fa-search dark:text-gray-400 top-5 left-4" />
          <input
            type="text"
            className="bg-transparent h-14 w-full px-12 rounded-lg dark:text-white border focus:outline-dark-300 "
            name=""
          />

          <button className="w-[200px] bg-primary">Add Layout</button>
        </div>
      </form>
    </div>
  );
};

export default SharedComp;
