import ProductsHeader from "@/components/Dashboard/Admin/Products/ProductsHeader";
import ProductsTable from "@/components/Dashboard/Admin/Products/ProductsTable";
import { getProduct } from "@/utils/api/product";
import React from "react";

const Products = async () => {
  const data = await getProduct();
  console.log("🚀 ~ file: page.js:8 ~ Products ~ data:", data);
  return (
    <>
      <ProductsHeader />
      <ProductsTable product={data} />
    </>
  );
};

export default Products;
