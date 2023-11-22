import ProductInfo from "./ProductInfo";
import Ratings from "./Ratings";
import ShareBtn from "./ShareBtn";

const ProductDetails = ({description}) => {
  return (
    <section className="w-full xl:flex mb-4 lg:grid">
      <div className="lg:w-[55%] ">
        <p className="mb-8  ">
          {description}
        </p>
        
        <div className="md:flex gap-5 text-center items-center">
          <p className="mb-5 md:mb-0">Share this item:</p>
          <ShareBtn />
        </div>
        <Ratings />
      </div>
      <div className="xl:w-[45%] pl-16 ">
        <ProductInfo />
      </div>
    </section>
  );
};

export default ProductDetails;
