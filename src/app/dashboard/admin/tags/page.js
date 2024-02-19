import CurrentTags from "@/components/Dashboard/Admin/Tags/CurrentTags";
import TagsUITable from "@/components/Dashboard/Admin/Tags/TagsUITable";
import SharedComp from "@/components/Shared/admin/SharedComp";
import React from "react";

const tagsPages = () => {
  return (
    <>
      {/* <CurrentTags /> */}
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
