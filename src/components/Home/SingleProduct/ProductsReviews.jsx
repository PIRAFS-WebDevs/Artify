import { AiFillDislike, AiFillLike, AiFillStar } from "react-icons/ai";
import FilterByPrice from "./FilterByPrice";

const ProductsReviews = () => {
  return (
    <section className="mb-4 ">
      <FilterByPrice />
      <div className="py-8 border-b dark:border-dark-300 border-light-500">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <img
              src="/assets/images/product/product_1.png"
              className="w-8 h-8 rounded-full"
            ></img>
            <p className="font-semibold dark:text-light-100">Mr. Lenin</p>
          </div>
          <p
            className={
              "flex items-center gap-2 bg-primary justify-center w-12 dark:text-light-100 rounded-3xl py-1 text-light-100"
            }
          >
            4 <AiFillStar />
          </p>
        </div>
        <div>
          <p className="my-5">
            Puva is a clean and modern responsive Artify Theme for Blogging,
            Magazine, and Affiliate Product Reviews website. It comes with six
            demo variations, including a blog and inner pages. The theme is
            developed with Elementor, Bootstrap, and Sass. The theme is
            compatible with the latest Artify.
          </p>
          <div className="flex items-center gap-5">
            <p>October 4, 2023</p>
            <p className="hover:text-primary">Report</p>
            <p className="flex items-center gap-3">
              0 <AiFillLike className="text-dark-100" />
            </p>
            <p className="flex items-center gap-3">
              0 <AiFillDislike className="text-dark-100" />
            </p>
          </div>
        </div>
      </div>
      <div className="py-8 border-b dark:border-dark-300 border-light-500">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <img
              src="/assets/images/product/product_2.png"
              className="w-8 h-8 rounded-full"
            ></img>
            <p className="font-semibold dark:text-light-100">Charlie Johnson</p>
          </div>
          <p
            className={
              "flex items-center gap-2 bg-primary justify-center w-12 dark:text-light-100 rounded-3xl py-1 text-light-100"
            }
          >
            5 <AiFillStar />
          </p>
        </div>
        <div>
          <p className="my-5">
            The theme is GDPR compliant! WooCommerce Shopping feature included.
            Also, Puva is compatible with Yoast SEO and WPML plugin
            compatibility. Puva includes Contact Form 7 and Newsletter plugin
            submission features. The theme contains well-commented and easily
            customizable source code with detailed documentation. These features
            will help the theme be used and customized based on the ultimate
            needs.
          </p>
          <div className="flex items-center gap-5">
            <p>October 4, 2023</p>
            <p className="hover:text-primary">Report</p>
            <p className="flex items-center gap-3">
              0 <AiFillLike className="text-dark-100" />
            </p>
            <p className="flex items-center gap-3">
              0 <AiFillDislike className="text-dark-100" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsReviews;
