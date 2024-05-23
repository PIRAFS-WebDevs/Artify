import ArticlesCategory from "@/components/Article/ArticleCategory";
import { getAllBlogs } from "@/utils/api/article";

const ArticlePage = async () => {
  const data = await getAllBlogs();

  return (
    <div>
      <ArticlesCategory blogs={data} />
    </div>
  );
};

export default ArticlePage;
