import DetailsSvg from "@/components/svg/DetailsSvg";
import PreviewSvg from "@/components/svg/PreviewSvg";
import Link from "next/link";
import { getProducts } from "@/utils/api/product";
import productData from "@/data/ProductData";

const Card = () => {
  // const products = await getProducts();
  return (
    <>
      <div className="grid gap-6 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-[2000px]:grid-cols-5 py-6 px-6">
        {productData?.map((product) => (
          <div
            key={product?._id}
            className="w-full col-span-1 space-y-2 min-h-fit dark:text-white"
          >
            <div className="relative flex w-full group">
              <img
                src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F781%2Fimage30.png&w=2048&q=75"
                alt=""
                className="object-fill w-full h-full"
              />
              <div className="absolute top-0 hidden w-full h-full opacity-50 group-hover:block group-hover:bg-black Z-10"></div>
              <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full gap-10 p-4 transition-all opacity-0 cursor-pointer bg-dark/50 backdrop-blur group-hover:gap-5 group-hover:opacity-100 dark:bg-dark/50">
                <PreviewSvg />
                <Link
                  href={`/products/${product?._id}`}
                  className="relative z-10 text-xs font-medium text-center text-light"
                >
                  <div className="flex items-center justify-center mb-2 transition-all rounded-full hover:bg-primary bg-dark-100 text-light backdrop-blur-sm hover:bg-brand h-11 w-11">
                    <DetailsSvg />
                  </div>
                  Details
                </Link>
              </div>
              <div></div>
            </div>

            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <img
                  src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F98%2Fconversions%2FGroup-14400-thumbnail.jpg&w=640&q=100"
                  alt=""
                  className="w-8 h-8 rounded-full"
                />

                <div className="space-y-1 text-sm">
                  <h1 className="font-medium line-clamp-1">{product?.name}</h1>
                  <p className="text-dark-100">Waresun</p>
                </div>
              </div>
              <div>
                <p className="px-2 py-1 space-x-0.5 text-xs text-white rounded-full bg-dark-200">
                  <span className="text-sm">&#2547;</span>
                  <span>{product?.price}</span>
                </p>
                <p className="px-2 py-1 space-x-0.5 text-xs text-white line-through rounded-full">
                  <span className="text-sm">&#2547;</span>
                  <span>{product?.price}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* load more button */}
      <div className="flex justify-center my-12">
        <button className="px-6 py-2 text-sm font-semibold transition-all rounded dark:text-white bg-primary md:block hover:bg-primarySec active:scale-95">
          Load More
        </button>
      </div>
    </>
  );
};

export default Card;
