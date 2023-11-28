import React from "react";

const MarketplaceCard1 = () => {
  return (
    <div className="grid grid-cols-1 gap-6 min-[500px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center py-4">
      {data.map((e) => (
        <div>
          <div
            key={e.id}
            className="flex flex-col items-center w-full transition-all duration-300 rounded-sm cursor-pointer hover:scale-105"
          >
            <img
              src={e.image}
              alt=""
              className="object-fill w-full h-full rounded"
            />
          </div>
          <p className="py-2 text-lg text-white cursor-pointer">{e.name}</p>
        </div>
      ))}
    </div>
  );
};

export default MarketplaceCard1;

const data = [
  {
    id: 1,
    image:
      "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F513%2Fimage07.png&w=2048&q=75",
    name: "Design Identity",
  },
  {
    id: 2,
    image:
      "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F513%2Fimage07.png&w=2048&q=75",
    name: "Web Design",
  },
  {
    id: 3,
    image:
      "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F513%2Fimage07.png&w=2048&q=75",
    name: "Art Design",
  },
  {
    id: 4,
    image:
      "https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F513%2Fimage07.png&w=2048&q=75",
    name: "App Design",
  },
];
