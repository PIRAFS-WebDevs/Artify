import React from "react";

const MarketplaceCard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
        <div
          key={e}
          className="flex flex-col items-center w-full gap-2 py-8 transition-all duration-300 rounded-lg cursor-pointer dark:bg-dark-400 group hover:scale-105"
        >
          <img
            src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F191%2FGroup-14394.png&w=2048&q=100"
            alt=""
            className="w-[80px] h-[80px] rounded"
          />
          <p className="text-sm text-white cursor-pointer group-hover:text-primary">
            Imagineco
          </p>
          <p className="text-sm text-dark-100">7 Products</p>
        </div>
      ))}
    </div>
  );
};

export default MarketplaceCard;
