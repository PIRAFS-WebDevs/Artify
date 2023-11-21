import DetailsSvg from "@/components/svg/DetailsSvg";
import PreviewSvg from "@/components/svg/PreviewSvg";
import Link from "next/link";

const Card = () => {
  return (
    <>
      <div className="grid gap-6 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-[2000px]:grid-cols-5 py-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
          <div
            key={e}
            className="w-full col-span-1 space-y-2 min-h-fit dark:text-white"
          >
            <div className="relative flex w-full group">
              <img
                src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F803%2Fconversions%2Fimage16-thumbnail.jpg&w=640&q=100"
                alt=""
                className="object-fill w-full h-full"
              />
              <div className="absolute top-0 hidden w-full h-full group-hover:block group-hover:bg-black opacity-70 Z-10"></div>
              <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full gap-10 p-4 transition-all opacity-0 cursor-pointer bg-dark/60 backdrop-blur group-hover:gap-5 group-hover:opacity-100 dark:bg-dark/70">
                <PreviewSvg />
                <Link
                  href={`/products/${"111"}`}
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
              <img
                src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F98%2Fconversions%2FGroup-14400-thumbnail.jpg&w=640&q=100"
                alt=""
                className="w-8 h-8 rounded-full"
              />

              <div className="space-y-1 text-sm">
                <h1 className="font-medium line-clamp-1">
                  Shoppie UI Kit PSD Ecommerce Design Template
                </h1>
                <p className="text-dark-100">Temper studios</p>
              </div>
              <p className="px-2 py-1 text-xs text-white rounded-full bg-dark-200">
                $69.00
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* load more button */}
      <div className="flex justify-center my-12">
        <button className="px-8 py-4 text-sm font-semibold transition-all rounded-md bg-primary dark:text-white hover:bg-primarySec active:scale-95">
          Load More
        </button>
      </div>
    </>
  );
};

export default Card;
