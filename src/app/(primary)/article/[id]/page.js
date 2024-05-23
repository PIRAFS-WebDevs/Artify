import ArticleDetails from "@/components/Article/ArticleDetails";
import { getSingleBlog } from "@/utils/api/article";

const ArticleDetailsPage = async ({ params }) => {
  const blog = await getSingleBlog(params.id);

  return (
    <div>
      <ArticleDetails blog={blog} />
    </div>
  );
};

export default ArticleDetailsPage;
