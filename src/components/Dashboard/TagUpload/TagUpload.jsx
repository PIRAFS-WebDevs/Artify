"use client";

import useAddTag from "@/hooks/tag/useAddTag";
import { useTag } from "@/hooks/tag/useTag";
import useUpdateTag from "@/hooks/tag/useUpdateTag";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Description from "./Description";
import UploadButton from "./UploadButton";

const TagUpload = () => {
  const [singleTag, setSingleTag] = useState([]);
  const searchParams = useSearchParams();
  const updateId = searchParams.get("id");
  const router = useRouter();

  const { data: tag, isSuccess: isTag } = useTag(updateId);
  const { mutateAsync: saveTag, isSuccess } = useAddTag();
  const { mutateAsync: updateTag, isSuccess: isUpdate } = useUpdateTag();

  useEffect(() => {
    if (updateId && isTag) {
      setSingleTag(tag);
    } else {
      setSingleTag([]);
    }
  }, [updateId, isTag]);

  useEffect(() => {
    if (isSuccess || isUpdate) {
      toast.success("Tag data submitted");
      router.replace("/dashboard/tags");
    }
  }, [isSuccess, isUpdate]);

  const {
    register,
    handleSubmit,
    setValue,
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
      saveTag(data);
    } else {
      updateTag({ id: updateId, data });
    }
  };

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
