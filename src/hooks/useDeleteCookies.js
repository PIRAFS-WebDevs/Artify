import { DeleteDataCart, GetDataCart } from "@/utils/api/cart";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useProducts } from "./product/useProducts";
import { useAllValueContext } from "./useAllValueContext";

const useCookies = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const { data: products = [] } = useProducts();
  const { cartUpdated, setCartUpdated } = useAllValueContext();

  const deleteCookies = async (id) => {
    await DeleteDataCart(id);

    const cartItemId = await GetDataCart();

    const filterData = products.filter((cart) =>
      cartItemId.find((p) => p.id === cart._id)
    );

    const total = filterData.reduce(
      (accumulator, currentData) =>
        accumulator + parseFloat(currentData.sale_price),
      0
    );

    setTotalPrice(parseFloat(total).toFixed(2));
    setCartItems(filterData);
    setCartUpdated(!cartUpdated);
    toast.success("Item has been removed from cart");
  };

  useEffect(() => {
    (async () => {
      const cartItemId = await GetDataCart();

      const filterData = products.filter((cart) =>
        cartItemId.find((p) => p.id === cart._id)
      );

      const total = filterData?.reduce(
        (accumulator, currentData) =>
          accumulator + parseFloat(currentData.price),
        0
      );

      setTotalPrice(parseFloat(total).toFixed(2));
      setCartItems(filterData);
    })();
  }, [products]);

  return { cartItems, totalPrice, deleteCookies };
};

export default useCookies;
