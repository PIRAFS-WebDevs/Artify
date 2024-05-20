import { getWishlist } from "@/utils/wish/wishList";
import WishProduct from "./WishProduct";

const Wishlist = async () => {
  const data = await getWishlist();

  return (
    <div className="space-y-4">
      <p className="dark:text-white text-dark-500">
        My Wishlist
        <span className="dark:text-dark-100 text-dark-300">
          ({data?.length})
        </span>
      </p>

      <div className="flex flex-col divide-y divide-dark-200">
        {data.map((id) => (
          <WishProduct key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
