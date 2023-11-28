"use client";

import Link from "next/link";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SharedComp = ({ type, AddType, link, search, SetSearchText, filter }) => {
  const handelSearchText = () => {
    const searchText = document.getElementById("search").value;

    SetSearchText(searchText);
  };
  const filterByLayout = () => {
    const searchText = document.getElementById("layout").value;
    console.log(
      "🚀 ~ file: SharedComp.jsx:13 ~ filterByLayout ~ searchText:",
      searchText
    );
    if (searchText === "N/A") {
      SetSearchText("");
    } else {
      SetSearchText(searchText);
    }
  };
  const filterByCategories = () => {
    const searchText = document.getElementById("category").value;
    if (searchText === "N/A") {
      SetSearchText("");
    } else {
      SetSearchText(searchText);
    }
  };
  return (
    <div className=" md:min-h-[96px] dark:border-dark-300   rounded-sm  border dark:bg-dark-400 w-full md:mb-0">
      <div className=" md:min-h-[96px]  py-5 md:py-0 md:flex px-5  justify-center items-center ">
        <div className="mb-5 md:w-1/2 md:mb-0 ">
          <p className="text-xl text-center md:text-start">{type && type}</p>
        </div>
        <form className=" md:w-1/2">
          <div className="items-center justify-between gap-1 md:flex">
            <div
              className={`${search ? " relative mb-5 md:mb-0" : "invisible"} ${
                link ? "md:w-8/12" : "md:w-full"
              }`}
            >
              <IoSearchOutline className="absolute dark:text-gray-400 top-5 left-4" />
              <input
                type="text"
                onChange={handelSearchText}
                className="w-full px-12 bg-transparent border rounded-sm h-14 dark:text-white focus:outline-dark-300 "
                name="search"
                id="search"
              />
            </div>

            <Link className={link || "hidden"} href={link ? link : ""}>
              <button className="w-full font-semibold rounded-sm h-14 md:w-auto px-7 bg-primary">
                + {AddType}
              </button>
            </Link>
          </div>
        </form>
      </div>

      {/*  */}
      {filter && (
        <div className="md:min-h-[96px] py-5 md:py-0 md:flex px-5  gap-5 justify-center items-center dark:bg-dark-400 w-full">
          {/* layout */}
          <div className="w-full">
            <label
              htmlFor="layout"
              className="inline-block mb-2 text-sm dark:text-white"
            >
              Filter by Layout
            </label>
            <select
              onChange={filterByLayout}
              id="layout"
              className="w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded-sm outline-none border-dark-200 focus:border-primary dark:text-white"
            >
              {layouts.map((layout, i) => (
                <option
                  key={i}
                  value={layout}
                  className="text-white bg-dark-300"
                >
                  {layout}
                </option>
              ))}
            </select>
          </div>
          {/* categories */}
          <div className="w-full space-y-2">
            <label className="inline-block text-sm dark:text-white">
              Filter by Categories:
            </label>

            <select
              onChange={filterByCategories}
              id="category"
              className="w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded-sm outline-none border-dark-200 focus:border-primary dark:text-white"
            >
              {categories.map((category, i) => (
                <option
                  key={i}
                  value={category}
                  className="text-white bg-dark-300"
                >
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default SharedComp;
const layouts = ["N/A", "Fixed", "Responsive", "Fluid"];

const categories = ["N/A", "Shopify", "React Native", "Angular", "Vue"];
