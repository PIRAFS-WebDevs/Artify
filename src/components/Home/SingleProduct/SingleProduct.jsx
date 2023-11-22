import BackBtn from "./BackBtn";
import ProductDetails from "./ProductDetails";
import ProductFooter from "./ProductFooter";
import ProductImages from "./ProductImages";
import ProductsReviews from "./ProductsReviews";

const SingleProduct = ({ productById }) => {
  const {
    name,
    slug,
    categories,
    tags,
    layout,
    description,
    price,
    status,
    _id,
    activity,
  } = productById;
  return (
    <section className="px-10 pt-8  dark:text-dark-100 text-sm">
      {
        <>
          <BackBtn />
          <ProductImages />
          <ProductDetails description={description} activity={activity} />
          <ProductFooter />
          <ProductsReviews />
        </>
      }
    </section>
  );
};

export default SingleProduct;
