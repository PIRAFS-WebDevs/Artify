import { AiFillHeart } from "react-icons/ai";

const Wishlist = () => {
  return (
    <div className="space-y-4">
      <p>
        My Wishlist <span className="text-dark-100">({10})</span>
      </p>

      <div className="flex flex-col divide-y divide-dark-200">
        {[1, 2, 3, 4, 5, 6].map((e, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 lg:flex-row justify-between lg:items-center py-4"
          >
            <div className="flex gap-4">
              <img
                src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F475%2Fconversions%2Fimage01-thumbnail.jpg&w=2048&q=100"
                alt=""
                className="w-[150px]"
              />

              <div className="space-y-1">
                <p className="text-white text-sm font-medium hover:text-primary cursor-pointer line-clamp-2">
                  ShppingPro Joomla Template
                </p>
                <p className="text-dark-100 text-sm">Omnico Team</p>
                <p className="text-primary text-sm px-2 py-1 bg-dark-200 font-semibold inline-block rounded-full">
                  $39.00
                </p>
              </div>
            </div>

            <div className="flex gap-4 self-end">
              <button className="bg-primary text-white text-sm font-medium p-3 rounded hover:bg-primarySec transition-all active:scale-95">
                Add to cart
              </button>
              <button
                className="bg-transparent text-primary text-sm font-medium p-3 rounded hover:bg-dark-200 border border-dark-200
           transition-all active:scale-95 flex gap-2 items-center"
              >
                <AiFillHeart className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
