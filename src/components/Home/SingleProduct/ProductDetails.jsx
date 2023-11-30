import ProductInfo from "./ProductInfo";
import Ratings from "./Ratings";
import ShareBtn from "./ShareBtn";

const ProductDetails = ({ productById }) => {
  return (
    <section className="w-full mb-4 xl:flex lg:grid">
      <div className="xl:w-[55%] md:w-full">
        <p className="mb-8 ">{productById?.description}</p>

        <div className="items-center gap-5 text-center md:flex">
          <p className="mb-5 md:mb-0">Share this item:</p>
          <ShareBtn />
        </div>
        <Ratings />
      </div>
      <div className="xl:w-[45%] xl:pl-16 items-center ">
        <ProductInfo productById={productById} />
      </div>
    </section>
  );
};

export default ProductDetails;
