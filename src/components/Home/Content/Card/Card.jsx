import React from "react";

const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((e) => (
        <div className="w-full sm:max-w-[310px] h-[270px] text-white space-y-2">
          <div className="flex h-[206px] w-full">
            <img
              src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F803%2Fconversions%2Fimage16-thumbnail.jpg&w=640&q=100"
              alt=""
              className="object-cover w-full"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <img
              src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F98%2Fconversions%2FGroup-14400-thumbnail.jpg&w=640&q=100"
              alt=""
              className="w-8 h-8 rounded-full"
            />
            <div className="space-y-1">
              <h1 className="text-sm font-medium">
                Shippingpro Rental Laravel
              </h1>
              <p className="text-sm text-[#777777]">Temper studios</p>
            </div>
            <p className="bg-[#2a2a2a] text-[#00b482] rounded-full px-2 py-1">
              $69.00
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
