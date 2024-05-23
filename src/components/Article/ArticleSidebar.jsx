"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";

const ArticleSidebar = ({ blogs }) => {
  const [categoryCounts, setCategoryCounts] = useState({});

  useEffect(() => {
    const categories = blogs.flatMap((blog) => blog.category);

    const counts = categories.reduce((acc, category) => {
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});

    setCategoryCounts(counts);
  }, [blogs]);

  return (
    <div className="pl-6 space-y-4 dark:text-gray-200 text-dark-500 md:col-span-2">
      <div className="py-4 space-y-3">
        <h1 className="flex items-center w-full gap-1 text-lg dark:text-gray-200 text-dark-500">
          Categories
          <span className="w-full h-1 border-y dark:border-dark-300 border-dark-100"></span>
        </h1>
        <div className="space-y-2 dark:text-dark-100 text-dark-200">
          {Object.entries(categoryCounts).map(([category, count]) => (
            <div className="flex gap-2" key={category}>
              <div className="flex gap-2">
                <span className="flex items-center justify-center w-6 h-6 text-xs rounded-full text-light-100 bg-primary">
                  {count}
                </span>
                <span>{category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-4 space-y-3">
        <h1 className="flex items-center w-full gap-1 text-lg dark:text-gray-200 text-dark-500 whitespace-nowrap">
          Popular Articles
          <span className="w-full h-1 border-y dark:border-dark-300 border-dark-100"></span>
        </h1>

        <div className="space-y-2 dark:text-dark-100 text-dark-200">
          {blogs.slice(0, 3).map((e) => (
            <div className="flex gap-2" key={e.id}>
              <Link href={`/article/${e.id}`} className="flex gap-2">
                <FaRegFileAlt /> {e.title1}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="py-4 space-y-3">
        <h1 className="flex items-center w-full gap-1 text-lg dark:text-gray-200 text-dark-500 whitespace-nowrap">
          Latest Articles
          <span className="w-full h-1 border-y dark:border-dark-300 border-dark-100"></span>
        </h1>
        <div className="space-y-2 dark:text-dark-100 text-dark-200">
          {blogs.slice(-3).map((e) => (
            <div className="flex gap-2" key={e.id}>
              <Link href={`/article/${e.id}`} className="flex gap-2">
                <FaRegFileAlt /> {e.title1}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleSidebar;
