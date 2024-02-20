import TagsUITable from "@/components/Dashboard/Admin/Tags/TagsUITable";
import SharedComp from "@/components/Shared/admin/SharedComp";

const tagsPages = () => {
  return (
    <>
      <SharedComp
        type={"Tags"}
        AddType={"Add Tags"}
        link={"/dashboard/admin/tags/upload"}
      />
      <TagsUITable />
    </>
  );
};

export default tagsPages;
