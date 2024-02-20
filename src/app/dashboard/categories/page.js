import CategoryUITable from "@/components/Dashboard/Admin/Categories/CategoryUITable";
import SharedComp from "@/components/Shared/admin/SharedComp";

const Categories = () => {
  return (
    <>
      <SharedComp
        type={"Categories"}
        AddType={"Add Category"}
        link={"/dashboard/admin/categories/upload"}
      />
      <CategoryUITable />
    </>
  );
};

export default Categories;
