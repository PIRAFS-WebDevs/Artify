"use client";

import AllProductContext from "@/context/AllProductContext";
import { getProducts } from "@/utils/api/product";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const AllProductProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const {
    data: products = [],
    isLoading,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  const value = { products: products?.products, setSearchText, isLoading };
  return (
    <AllProductContext.Provider value={value}>
      {children}
    </AllProductContext.Provider>
  );
};

export default AllProductProvider;
