import Link from "next/link";
import { AiFillFolder } from "react-icons/ai";
import { FaRegFileAlt } from "react-icons/fa";

const ArticlesCategory = ({ blogs }) => {
  const getBlogsByCategory = (category) => {
    return blogs.filter((blog) => blog.category === category);
  };

  const reactBlogs = getBlogsByCategory("React");
  const angularBlogs = getBlogsByCategory("Angular");
  const javaScriptBlogs = getBlogsByCategory("JavaScript");
  const mongoDBlogs = getBlogsByCategory("MongoDB");
  const nodejsBlogs = getBlogsByCategory("Node.js");

  return (
    <div className="pr-6 space-y-4 divide-y dark:text-light-100 text-dark-500 md:border-r dark:border-dark-300 border-dark-100 dark:divide-dark-300 divide-dark-100">
      <div>
        <h1 className="py-4 text-xl font-semibold dark:text-gray-200 text-dark-500">
          Article Category
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 max-sm:divide-y dark:divide-dark-300 divide-dark-100">
        <div className="py-4 space-y-3">
          <h1 className="flex items-center gap-2 text-lg dark:text-gray-200 text-dark-300">
            <AiFillFolder /> React Blogs{" "}
            <span className="text-sm text-dark-100">({reactBlogs.length})</span>
          </h1>
          <div className="space-y-2 dark:text-dark-100 text-dark-200">
            {reactBlogs.map((e) => (
              <div className="flex gap-2" key={e.id}>
                <Link href={`/article/${e.id}`} className="flex gap-2 ml-6">
                  <FaRegFileAlt /> {e.title1}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="py-4 space-y-3">
          <h1 className="flex items-center gap-2 text-lg dark:text-gray-200 text-dark-300">
            <AiFillFolder /> Angular Blogs{" "}
            <span className="text-sm text-dark-100">
              ({angularBlogs.length})
            </span>
          </h1>
          <div className="space-y-2 dark:text-dark-100 text-dark-200">
            {angularBlogs.map((e) => (
              <div className="flex gap-2" key={e.id}>
                <Link href={`/article/${e.id}`} className="flex gap-2 ml-6">
                  <FaRegFileAlt /> {e.title1}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 max-sm:divide-y dark:divide-dark-300 divide-dark-100">
        <div className="py-4 space-y-3">
          <h1 className="flex items-center gap-2 text-lg dark:text-gray-200 text-dark-300">
            <AiFillFolder /> JavaScript Blogs{" "}
            <span className="text-sm text-dark-100">
              ({javaScriptBlogs.length})
            </span>
          </h1>
          <div className="space-y-2 dark:text-dark-100 text-dark-200">
            {javaScriptBlogs.map((e) => (
              <div className="flex gap-2" key={e.id}>
                <Link href={`/article/${e.id}`} className="flex gap-2 ml-6">
                  <FaRegFileAlt /> {e.title1}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="py-4 space-y-3">
          <h1 className="flex items-center gap-2 text-lg dark:text-gray-200 text-dark-300">
            <AiFillFolder /> MongoDB Blogs{" "}
            <span className="text-sm text-dark-100">
              ({mongoDBlogs.length})
            </span>
          </h1>
          <div className="space-y-2 dark:text-dark-100 text-dark-200">
            {mongoDBlogs.map((e) => (
              <div className="flex gap-2" key={e.id}>
                <Link href={`/article/${e.id}`} className="flex gap-2 ml-6">
                  <FaRegFileAlt /> {e.title1}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="py-4 space-y-3">
          <h1 className="flex items-center gap-2 text-lg dark:text-gray-200 text-dark-300">
            <AiFillFolder /> Node.js Blogs{" "}
            <span className="text-sm text-dark-100">
              ({nodejsBlogs.length})
            </span>
          </h1>
          <div className="space-y-2 dark:text-dark-100 text-dark-200">
            {nodejsBlogs.map((e) => (
              <div className="flex gap-2" key={e.id}>
                <Link href={`/article/${e.id}`} className="flex gap-2 ml-6">
                  <FaRegFileAlt /> {e.title1}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCategory;
