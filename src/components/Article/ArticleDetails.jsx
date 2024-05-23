import Link from "next/link";
import { AiOutlineFile, AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

const ArticleDetails = ({ blog }) => {
  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <AiOutlineFile size={"2rem"} />
        <div className="space-y-2">
          <h1 className="flex items-center gap-4 text-lg font-medium md:text-2xl text-dark-500 dark:text-light-100">
            {blog?.title1}
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm dark:text-dark-100 text-dark-200">
            <AiOutlineHome /> /
            <Link href={`/article/${blog?.id}`}>{blog?.category}</Link>
            <span>{blog?.title1}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 py-4 text-xs font-medium md:text-sm text-dark-300 dark:text-dark-100 border-y border-dark-100 dark:border-dark-300">
        <p>{blog?.date}</p>
        <p className="flex items-center gap-2">
          <BiUserCircle /> {blog?.name}
        </p>
        <p>{blog?.category}</p>
      </div>

      <div>
        <p>{blog?.details1}</p>
      </div>

      <div className="space-y-4">
        <h1 className="text-xl font-medium text-dark-500 dark:text-light-100">
          {blog?.title2}
        </h1>
        <p>{blog?.details2}</p>
      </div>
    </div>
  );
};

export default ArticleDetails;
