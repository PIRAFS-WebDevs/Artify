import { AiFillDislike, AiFillLike, AiFillStar } from "react-icons/ai";
import FilterByPrice from "./FilterByPrice";

const ProductsReviews = () => {
  return (
    <section className="mb-4 ">
      <FilterByPrice />
      <div className="py-8 border-b dark:border-dark-300 border-light-500">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <p className="w-8 h-8 bg-green-500 rounded-full"></p>
            <p className="font-semibold dark:text-light-100">Customer</p>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            dicta rerum harum enim perspiciatis voluptas veritatis ipsam.
            Suscipit ab rem est atque nulla enim nihil dolores sit. Neque,
            delectus perspiciatis?
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
