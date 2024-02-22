import TagsUITable from "@/components/Dashboard/Tags/TagsUITable";
import SharedComp from "@/components/Shared/Dashboard/SharedComp";

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
