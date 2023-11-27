import { useState } from "react";
import { GetDataCart } from "./AddToCart";

const HandelCart = () => {
    const [isCartAdded, setIsCartAdded] = useState(false)

    (async ()=> {
        const precart = await GetDataCart()
        if (precart) {
         const check = precart.some(pre => pre.id === _id)
         setIsCartAdded(check)
        }
        if (!isCartAdded) {
            await AddToCart(cart);
            setCartUpdated(!cartUpdated)
          toast.success("product added on the cart");
          }else{
            toast.error("product alrady added on the cart");
          }
       })();
       const handelCart = async (cart) => {
        // await AddToCart(cart);
        // await addToCart(cart);
        if (!isCartAdded) {
          await AddToCart(cart);
          setCartUpdated(!cartUpdated)
        toast.success("product added on the cart");
        }else{
          toast.error("product alrady added on the cart");
        }
       
        
      };
};

export default HandelCart;