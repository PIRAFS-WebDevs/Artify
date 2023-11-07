import BackBtn from "./BackBtn";
import ProductDetails from "./ProductDetails";
import ProductImages from "./ProductImages";
import ProductsReviews from "./ProductsReviews";

const SingleProduct = () => {
  return (
    <section className="px-10 pt-8  dark:text-darkNormal text-sm">
      <BackBtn />
      <ProductImages />
      <ProductDetails />
      <ProductsReviews/>
      
    </section>
  );
};

export default SingleProduct;
