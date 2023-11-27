import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const ApplicatonSearch = () => {
  return (
    <div className="relative grid py-6 place-items-center bg-dark-100">
      <label htmlFor="Search" className="sr-only">
        {" "}
        Search{" "}
      </label>

      <input
        type="text"
        id="Search"
        placeholder="Have a question? Ask or enter a search term."
        className="w-full px-4 py-2 transition duration-100 bg-transparent border rounded-full outline-none border-dark-200 focus:border-primary dark:text-white pe-24 placeholder:text-sm"
      />

      <div className="absolute inset-y-0 grid w-20 end-2 place-content-center">
        <button className="flex items-center px-3 py-1 text-xs text-white transition-all duration-200 rounded-full bg-primary hover:bg-primarySec active:scale-95 ">
          <AiOutlineSearch />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default ApplicatonSearch;
