import ArticleDetails from "@/components/Article/ArticleDetails";

const ArticleDetailsPage = ({ params }) => {
  return (
    <div>
      <ArticleDetails id={params.id} />
    </div>
  );
};

export default ArticleDetailsPage;
