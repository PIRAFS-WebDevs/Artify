import toast from "react-hot-toast";
import { AddToCart, GetDataCart } from "./api/cart";

export const handleCart = async (cart, _id, setCartUpdated) => {
  const checking = async () => {
    try {
      const preCart = await GetDataCart();

      if (preCart) {
        const check = preCart.some((pre) => pre.id === _id);
        return check;
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };
  const checked = await checking();

  if (!checked) {
    await AddToCart(cart);
    setCartUpdated((prevState) => !prevState);
    toast.success("Product added to the cart");
  } else {
    toast.error("Product already added to the cart");
  }
};
