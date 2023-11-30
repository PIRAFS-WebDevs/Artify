import BackBtn from "./BackBtn";
import ProductDetails from "./ProductDetails";
import ProductFooter from "./ProductFooter";
import ProductImages from "./ProductImages";
import ProductsReviews from "./ProductsReviews";

const SingleProduct = ({ productById }) => {
  return (
    <section className="px-10 pt-8 text-sm dark:text-dark-100">
      {
        <>
          <BackBtn />
          <ProductImages />
          <ProductDetails productById={productById} />
          <ProductFooter productById={productById} />
          <ProductsReviews />
        </>
      }
    </section>
  );
};

export default SingleProduct;
