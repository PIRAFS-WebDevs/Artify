import ProductsTable from "@/components/Dashboard/Admin/Products/ProductsTable";
import ProductMantineTable from "@/components/Dashboard/Admin/Products/ProductMantineTable";
import SharedComp from "@/components/Shared/admin/SharedComp";

const Products = async () => {
  return (
    <>
      {/* <ProductsTable /> */}
      <SharedComp
        type={"Products"}
        // search
        AddType={"Add Product"}
        link={"/dashboard/admin/products/upload"}
      />
      <div className="mt-5"> <ProductMantineTable /></div>
     
    </>
  );
};

export default Products;
