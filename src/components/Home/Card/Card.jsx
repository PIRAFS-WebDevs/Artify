import DetailsSvg from "@/components/svg/DetailsSvg";
import PreviewSvg from "@/components/svg/PreviewSvg";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <section className="p-8">
    
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
          <div
            key={e}
            // sm:max-w-[310px]
            className="w-full h-[270px] dark:text-white space-y-2 col-span-1"
          >
            <div className="flex max-h-[206px] w-full relative  group">
              <img
                src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F803%2Fconversions%2Fimage16-thumbnail.jpg&w=640&q=100"
                alt=""
                className="object-cover w-full "
              />
              <div className="hidden group-hover:block group-hover:bg-black opacity-70 w-full h-full absolute Z-10 top-0"></div>
              <div className="absolute top-0 left-0 z-10 flex h-full w-full cursor-pointer items-center justify-center gap-9 bg-dark/60 p-4 opacity-0  backdrop-blur-sm transition-all group-hover:gap-5 group-hover:opacity-100 dark:bg-dark/70">
                <button className="text-center font-medium text-light text-xs">
                  <div className="mb-2 flex items-center justify-center rounded-full hover:bg-primary  text-light backdrop-blur-sm transition-all hover:bg-brand h-11 w-11">
                    <PreviewSvg />
                  </div>
                  Preview
                </button>
                <Link
                  href={`/products/${"111"}`}
                  className="relative z-[11] text-center font-medium text-light text-xs"
                >
                  <div className="mb-2 flex items-center justify-center rounded-full hover:bg-primary text-light backdrop-blur-sm transition-all hover:bg-brand h-11 w-11">
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

              <div className="space-y-1">
                <h1 className="text-sm font-medium line-clamp-1">
                  Shoppie UI Kit PSD Ecommerce Design Template
                </h1>
                <p className="text-sm text-[#777777]">Temper studios</p>
              </div>
              <p className="bg-[#2a2a2a] text-primary text-sm rounded-full px-2 py-1">
                $69.00
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* load more button */}
      <div className="flex justify-center my-6">
        <button className="bg-primary dark:text-white font-semibold px-8 py-4 rounded-md hover:bg-[#00997d] transition-all active:scale-95">
          Load More
        </button>
      </div>
    </section>
  );
};

export default Card;
