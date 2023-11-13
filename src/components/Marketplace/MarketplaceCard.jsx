import React from "react";

const MarketplaceCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-8">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
        <div
          key={e}
          className="flex flex-col gap-2 items-center bg-dark-400 rounded-lg w-full py-8 group cursor-pointer hover:scale-105 transition-all duration-300"
        >
          <img
            src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F191%2FGroup-14394.png&w=2048&q=100"
            alt=""
            className="w-[80px] h-[80px] rounded"
          />
          <p className="text-white group-hover:text-primary text-sm cursor-pointer">
            Imagineco
          </p>
          <p className="text-dark-100 text-sm">7 Products</p>
        </div>
      ))}
    </div>
  );
};

export default MarketplaceCard;
