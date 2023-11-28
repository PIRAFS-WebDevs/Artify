import Link from "next/link";
import React from "react";
import { AiFillFolder } from "react-icons/ai";
import { FaRegFileAlt } from "react-icons/fa";

const ArticlesCategory = () => {
  return (
    <div className="pr-6 space-y-4 text-white divide-y md:border-r border-dark-300 md:col-span-3 divide-dark-300">
      <div>
        <h1 className="py-4 text-xl font-semibold text-gray-200">
          Article Category
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 max-sm:divide-y divide-dark-300">
        <div className="py-4 space-y-3">
          <h1 className="flex items-center gap-2 text-lg text-gray-200">
            <AiFillFolder /> React Problem{" "}
            <span className="text-sm text-dark-100">(12)</span>
          </h1>
          <div className="space-y-2 text-dark-100">
            {[1, 2, 3, 4, 5].map((e) => (
              <Link href={"#"} className="flex gap-2 ml-6" key={e}>
                <FaRegFileAlt /> How async works in react?
              </Link>
            ))}
          </div>
        </div>
        <div className="py-4 space-y-3">
          <h1 className="flex items-center gap-2 text-lg text-gray-200">
            <AiFillFolder /> React Problem{" "}
            <span className="text-sm text-dark-100">(12)</span>
          </h1>
          <div className="space-y-2 text-dark-100">
            {[1, 2, 3, 4, 5].map((e) => (
              <Link href={"#"} className="flex gap-2 ml-6" key={e}>
                <FaRegFileAlt /> How async works in react?
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 max-sm:divide-y divide-dark-300">
        <div className="py-4 space-y-3">
          <h1 className="flex items-center gap-2 text-lg text-gray-200">
            <AiFillFolder /> React Problem{" "}
            <span className="text-sm text-dark-100">(12)</span>
          </h1>
          <div className="space-y-2 text-dark-100">
            {[1, 2, 3, 4, 5].map((e) => (
              <Link href={"#"} className="flex gap-2 ml-6" key={e}>
                <FaRegFileAlt /> How async works in react?
              </Link>
            ))}
          </div>
        </div>
        <div className="py-4 space-y-3">
          <h1 className="flex items-center gap-2 text-lg text-gray-200">
            <AiFillFolder /> React Problem{" "}
            <span className="text-sm text-dark-100">(12)</span>
          </h1>
          <div className="space-y-2 text-dark-100">
            {[1, 2, 3, 4, 5].map((e) => (
              <Link href={"#"} className="flex gap-2 ml-6" key={e}>
                <FaRegFileAlt /> How async works in react?
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCategory;
