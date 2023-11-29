"use client";

import AllProductContext from "@/context/AllProductContext";
import {
  ProductByid,
  delAnyItem,
  getProductById,
  getProducts,
} from "@/utils/api/product";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { stringify } from "postcss";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AllProductProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const router = useRouter();
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

  const handelAction = async (value, id, api, title, viewUrl, editUrl) => {
    if (value === "delete") {
      if (id) {
        const deleteItems = await delAnyItem(id, api);
        if (deleteItems?.status === 200) {
          toast.success(`${title} is deleted`);
          refetch();
        } else {
          toast.error(`Have some problem to deleted ${title}`);
        }
      }
    }
    if (value === "view") {
      router.replace(`${viewUrl}${id}`);
    }
    if (value === "edit") {
      router.replace(`${editUrl}?id=${id}`);
    }
  };

  const value = {
    products,
    category,
    product,
    setId,
    setCategory,
    handelAction,
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
