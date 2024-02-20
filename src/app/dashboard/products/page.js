import ProductsUITable from "@/components/Dashboard/Admin/Products/ProductUITable";
import SharedComp from "@/components/Shared/admin/SharedComp";

const Products = async () => {
  return (
    <>
      <SharedComp
        type={"Products"}
        AddType={"Add Product"}
        link={"/dashboard/admin/products/upload"}
      />
      <ProductsUITable />
    </>
  );
};

export default Products;
