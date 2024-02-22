import LayoutUITable from "@/components/Dashboard/Layouts/LayoutUITable";
import SharedComp from "@/components/Shared/Dashboard/SharedComp";

const page = () => {
  return (
    <>
      <SharedComp
        type={"Layouts"}
        AddType={"Add Layouts"}
        link={"/dashboard/layouts/upload"}
      />
      <LayoutUITable />
    </>
  );
};

export default page;
