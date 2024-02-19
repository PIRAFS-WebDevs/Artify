import LayoutUITable from "@/components/Dashboard/Admin/Layouts/LayoutUITable";
import Layouts from "@/components/Dashboard/Admin/Layouts/Layouts";
import SharedComp from "@/components/Shared/admin/SharedComp";

const page = () => {
  return (
    <>
      {/* <Layouts /> */}
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
