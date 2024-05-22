import { blogs } from "@/data/blogData";
import Link from "next/link";
import { FaRegFileAlt } from "react-icons/fa";

const ArticleSidebar = () => {
  const categories = blogs.map((blog) => blog.category);

  return (
    <div className="pl-6 space-y-4 dark:text-gray-200 text-dark-500 md:col-span-2">
      <div className="py-4 space-y-3">
        <h1 className="flex items-center w-full gap-1 text-lg dark:text-gray-200 text-dark-500">
          Categories
          <span className="w-full h-1 border-y dark:border-dark-300 border-dark-100"></span>
        </h1>
        <div className="space-y-2 dark:text-dark-100 text-dark-200">
          {categories.map((e) => (
            <div className="flex gap-2" key={e}>
              <div className="flex gap-2">
                <span className="flex items-center justify-center w-6 h-6 text-xs rounded-full text-light-100 bg-primary">
                  5
                </span>
                <span>{e}</span>
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
