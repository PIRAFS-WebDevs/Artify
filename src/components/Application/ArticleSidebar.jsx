import Link from "next/link";
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";

const ArticleSidebar = () => {
  return (
    <div className="pl-6 space-y-4 dark:text-gray-200 text-dark-500 md:col-span-2">
      <div className="py-4 space-y-3">
        <h1 className="flex items-center w-full gap-1 text-lg dark:text-gray-200 text-dark-500">
          Categories{" "}
          <span className="w-full h-1 border-y dark:border-dark-300 border-dark-100"></span>
        </h1>
        <div className="space-y-2 text-dark-100">
          {[1, 2, 3, 4, 5].map((e) => (
            <div className="flex gap-2" key={e}>
              <Link href={"#"} className="flex gap-2">
                <span className="flex items-center justify-center w-6 h-6 text-xs text-white rounded-full bg-primary">
                  21
                </span>{" "}
                <span className="">Web Apps</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="py-4 space-y-3">
        <h1 className="flex items-center w-full gap-1 text-lg dark:text-gray-200 text-dark-500 whitespace-nowrap">
          Popular Articles{" "}
          <span className="w-full h-1 border-y dark:border-dark-300 border-dark-100"></span>
        </h1>

        <div className="space-y-2 text-dark-100">
          {[1, 2, 3].map((e) => (
            <div className="flex gap-2" key={e}>
              <Link href={"#"} className="flex gap-2">
                <FaRegFileAlt /> How async works in react?
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="py-4 space-y-3">
        <h1 className="flex items-center w-full gap-1 text-lg dark:text-gray-200 text-dark-500 whitespace-nowrap">
          Latest Articles{" "}
          <span className="w-full h-1 border-y dark:border-dark-300 border-dark-100"></span>
        </h1>
        <div className="space-y-2 text-dark-100">
          {[1, 2, 3].map((e) => (
            <div className="flex gap-2" key={e}>
              <Link href={"#"} className="flex gap-2">
                <FaRegFileAlt /> How async works in react?
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleSidebar;
