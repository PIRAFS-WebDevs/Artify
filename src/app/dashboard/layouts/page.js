import LayoutUITable from "@/components/Dashboard/Layouts/LayoutUITable";
import SharedComp from "@/components/Shared/admin/SharedComp";

const page = () => {
  return (
    <>
      <SharedComp
        type={"Layouts"}
        AddType={"Add Layouts"}
        link={"/dashboard/admin/layouts/upload"}
      />
      <LayoutUITable />
    </>
  );
};

export default page;
