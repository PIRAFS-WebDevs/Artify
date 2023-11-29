"use client";

import AllProductContext from "@/context/AllProductContext";
import { ProductByid, getProductById, getProducts } from "@/utils/api/product";
import { useQuery } from "@tanstack/react-query";
import { stringify } from "postcss";
import React, { useState } from "react";

const AllProductProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const [id, setId] = useState(null);
  const {
    data: products = [],
    isLoading,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["products", category],
    queryFn: () => getProducts(category),
  });

  const { data: product = [] } = useQuery({
    queryKey: ["product", id],
    queryFn: () => ProductByid(id),
  });

  const value = {
    products,
    category,
    product,
    setId,
    setCategory,
    isLoading,
    refetch,
  };
  return (
    <AllProductContext.Provider value={value}>
      {children}
    </AllProductContext.Provider>
  );
};

export default AllProductProvider;
