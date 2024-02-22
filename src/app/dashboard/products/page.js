import ProductsUITable from "@/components/Dashboard/Products/ProductUITable";
import SharedComp from "@/components/Shared/Dashboard/SharedComp";

const Products = () => {
  return (
    <>
      <SharedComp
        type={"Products"}
        AddType={"Add Product"}
        link={"/dashboard/products/upload"}
      />
      <ProductsUITable />
    </>
  );
};

export default Products;
