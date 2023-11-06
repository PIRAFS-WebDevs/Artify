import BackBtn from "./BackBtn";
import ProductDetails from "./ProductDetails";
import ProductImages from "./ProductImages";

const SingleProduct = () => {
  return (
    <section className="px-10 pt-8  dark:text-darkNormal text-sm">
      <BackBtn />
      <ProductImages />
      <ProductDetails />
      
    </section>
  );
};

export default SingleProduct;
