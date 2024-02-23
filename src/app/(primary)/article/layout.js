import ArticleSearch from "@/components/Article/ArticleSearch";
import ArticleSidebar from "@/components/Article/ArticleSidebar";

const ArticleLayout = ({ children }) => {
  return (
    <div>
      <ArticleSearch />
      <div className="grid w-full p-8 mx-auto md:grid-cols-5">
        <div className="md:col-span-3">{children}</div>
        <ArticleSidebar />
      </div>
    </div>
  );
};

export default ArticleLayout;
