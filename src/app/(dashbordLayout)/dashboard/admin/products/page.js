import ProductsTable from "@/components/Dashboard/Admin/Products/ProductsTable";
import SharedComp from "@/components/Shared/admin/SharedComp";
import ProductsUITable from "@/components/Dashboard/Admin/Products/ProductUITable";

const Products = async () => {
  return (
    <>
      {/* <ProductsTable /> */}
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
