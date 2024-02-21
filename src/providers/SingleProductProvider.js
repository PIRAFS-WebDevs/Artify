"use client";

import SingleProductContext from "@/context/SingleProductContext";
import { useProducts } from "@/hooks/product/useProducts";
import { useState } from "react";

const SingleProductProvider = ({ children }) => {
  const [productId, setProductId] = useState(null);
  const { data: products } = useProducts();

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
