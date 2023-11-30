"use client";

import { useForm } from "react-hook-form";
import UploadButton from "./UploadButton";
import Description from "./Description";
import { getTagById, saveTag, updateTag } from "@/utils/api/tags";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const TagUpload = () => {
  const [singleTag, setSingleTag] = useState([]);
  const searchParams = useSearchParams();
  const updateId = searchParams.get("id");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (singleTag) {
      setValue("name", singleTag.name || "");
      setValue("slug", singleTag.slug || "");
      setValue("details", singleTag.details || "");
    }
  }, [singleTag, setValue]);

  const formHandler = async (data) => {
    if (!updateId) {
      const res = await saveTag(data);
      console.log("saveRes:", res);
      console.table(data);
      if (res?.data?.success) {
        toast.success("Tags is uploaded");
        router.replace("/dashboard/admin/tags");
      }
    } else if (updateId) {
      const res = await updateTag(data, updateId);
      console.log("updatedRes:", res);
      if (res?.data?.success) {
        toast.success("Tags is updated");
        router.replace("/dashboard/admin/tags");
      }
    }
  };
  useEffect(() => {
    (async () => {
      if (!updateId) {
        setSingleTag([]);
      }
      if (updateId) {
        const Category = await getTagById(updateId);
        setSingleTag(Category);
      }
    })();
  }, [updateId]);

  return (
    <div className="divide-y divide-dark-200">
      <h1 className="pb-6 text-lg font-medium dark:text-white">Tag Upload</h1>

      <form onSubmit={handleSubmit(formHandler)}>
        {/* description */}
        <Description register={register} errors={errors} />

        {/* product upload button */}
        <UploadButton />
      </form>
    </div>
  );
};

export default TagUpload;
