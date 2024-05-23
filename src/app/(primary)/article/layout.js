import ArticleSearch from "@/components/Article/ArticleSearch";
import ArticleSidebar from "@/components/Article/ArticleSidebar";
import { getAllBlogs } from "@/utils/api/article";

const ArticleLayout = async ({ children }) => {
  const blogs = await getAllBlogs();

  return (
    <div>
      <ArticleSearch />
      <div className="grid w-full p-8 mx-auto md:grid-cols-5">
        <div className="md:col-span-3">{children}</div>
        <ArticleSidebar blogs={blogs} />
      </div>
    </div>
  );
};

export default ArticleLayout;
