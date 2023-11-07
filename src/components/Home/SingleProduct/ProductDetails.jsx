import ProductInfo from "./ProductInfo";
import Ratings from "./Ratings";
import ShareBtn from "./ShareBtn";

const ProductDetails = () => {
  return (
    <section className="w-full flex mb-4">
      <div className="w-[55%] ">
        <p className="mb-8  ">
          {`Along With Wordpress Themes & Plugins, We always try to use latest trending techs like React, Next Js, Gatsby Js, GraphQl, Shopify etc to make our products special. Our rich tech choice will help you to build high performance applications. We are also known to provide great customer supports to our customers.`}
        </p>

        <hr className="mb-8 " />
        <div className="flex gap-5  items-center">
          <p>Share tis item:</p>
          <ShareBtn />
        </div>
        <Ratings />
      </div>
      <div className="w-[45%] pl-16 ">
        <ProductInfo />
      </div>
    </section>
  );
};

export default ProductDetails;
