import CategoryUITable from "@/components/Dashboard/Admin/Categories/CategoryUITable";
import Category from "@/components/Home/Category/Category";
import SharedComp from "@/components/Shared/admin/SharedComp";

const Categories = () => {
  return (
    <>
      <SharedComp
        type={"Categories"}
        AddType={"Add Category"}
        link={"/dashboard/admin/categories/upload"}
      />
      {/* <Category /> */}
      <CategoryUITable />
    </>
  );
};

export default Categories;
