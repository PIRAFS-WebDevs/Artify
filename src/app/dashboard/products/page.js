import ProductsUITable from "@/components/Dashboard/Admin/Products/ProductUITable";
import SharedComp from "@/components/Shared/admin/SharedComp";

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
