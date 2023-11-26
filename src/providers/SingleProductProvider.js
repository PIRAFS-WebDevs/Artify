"use client";

import AllProductContext from "@/context/AllProductContext";
import SingleProductContext from "@/context/SingleProductContext";
import { useContext, useState } from "react";

const SingleProductProvider = ({ children }) => {
  const [productId, setProductId] = useState(null);
  const { products } = useContext(AllProductContext);

  const singleProduct = () => {
    const data = products?.find((product) => product?._id === productId);
    return data;
  };

  const singleProductData = singleProduct();

  const value = {
    singleProductData,
    setProductId,
  };

  return (
    <SingleProductContext.Provider value={value}>
      {children}
    </SingleProductContext.Provider>
  );
};

export default SingleProductProvider;
