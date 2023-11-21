import Link from "next/link";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SharedComp = ({ type, AddType, link, search, SetSearchText }) => {
  const handelSearchText = () => {
    const searchText = document.getElementById("search").value;

    SetSearchText(searchText);
  };
  return (
    <div className="md:h-24 py-5 md:py-0 md:flex px-5 rounded border dark:border-dark-300 justify-center items-center dark:bg-dark-400 w-full md:mb-0">
      <div className="md:w-1/2 mb-5 md:mb-0 ">
        <p className="text-xl text-center md:text-start">{type && type}</p>
      </div>
      <form className=" md:w-1/2  ">
        <div className="md:flex gap-1 items-center justify-between">
          <div
            className={`${search ? " relative mb-5 md:mb-0" : "invisible"} ${
              link ? "md:w-8/12" : "md:w-full"
            }`}
          >
            <IoSearchOutline className="absolute dark:text-gray-400 top-5 left-4" />
            <input
              type="text"
              onChange={handelSearchText}
              className="bg-transparent h-14 w-full px-12 rounded dark:text-white border focus:outline-dark-300 "
              name="search"
              id="search"
            />
          </div>

          <Link className={link || "hidden"} href={link ? link : ""}>
            <button className="h-14 md:w-auto w-full  px-7 bg-primary rounded font-semibold">
              + {AddType}
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SharedComp;
