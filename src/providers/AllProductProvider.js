"use client";

import AllProductContext from "@/context/AllProductContext";
import { getProducts } from "@/utils/api/product";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const AllProductProvider = ({ children }) => {
  const [category, setCategory] = useState("");

  const {
    data: products = [],
    isLoading,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["products", category],
    queryFn: () => getProducts(category),
  });

  const value = {
    products: products?.products,
    category,
    setCategory,
    isLoading,
  };
  return (
    <AllProductContext.Provider value={value}>
      {children}
    </AllProductContext.Provider>
  );
};

export default AllProductProvider;
