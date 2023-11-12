"use client";
import React, { useContext } from "react";
import footerdata from "@/data/footerData";
import AllStateContext from "@/context/AllStateContext";

const Footer = () => {
  const { sideBarOpen, setSideBarOpen } = useContext(AllStateContext);

  return (
    <div
      className={`grid sm:grid-cols-1 mt-auto text-sm py-8  dark:bg-dark-500 md:grid-cols-2 lg:grid-cols-4 ${
        sideBarOpen ? "ml-[300px]" : "ml-[150px]"
      } gap-10 `}
    >
      {/* {sideBarOpen?<div className="col-span-1"></div> : <div className="col-s"></div>} */}

      {footerdata.map((categoryObj, index) => (
        <div key={index} className=" text-white">
          {Object.keys(categoryObj).map((categoryName, categoryIndex) => (
            <div key={categoryName}>
              <h2 className="text-xl font-bold pb-3">{categoryName}</h2>
              <ul>
                {categoryObj[categoryName].map((subcategory, subIndex) => (
                  <li
                    key={subIndex}
                    className="hover:text-dark-100 cursor-pointer"
                  >
                    {subcategory.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Footer;
