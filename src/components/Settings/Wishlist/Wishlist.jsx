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
            className="flex flex-col justify-between gap-4 py-4 lg:flex-row lg:items-center"
          >
            <div className="flex gap-4">
              <img
                src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F475%2Fconversions%2Fimage01-thumbnail.jpg&w=2048&q=100"
                alt=""
                className="w-[120px] md:w-[150px]"
              />

              <div className="space-y-1">
                <p className="text-sm font-medium text-white cursor-pointer hover:text-primary line-clamp-2">
                  ShppingPro Joomla Template
                </p>
                <p className="text-sm text-dark-100">Omnico Team</p>
                <p className="inline-block px-2 py-1 text-sm font-semibold rounded-full text-primary bg-dark-200">
                  $39.00
                </p>
              </div>
            </div>

            <div className="flex self-end gap-4">
              <button className="p-2 text-sm font-medium text-white transition-all duration-200 rounded-sm md:p-3 bg-primary hover:bg-primarySec active:scale-95">
                Add to cart
              </button>
              <button className="flex items-center gap-2 p-2 text-sm font-medium transition-all duration-200 bg-transparent border rounded-sm md:p-3 text-primary hover:bg-dark-200 border-dark-200 active:scale-95">
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
