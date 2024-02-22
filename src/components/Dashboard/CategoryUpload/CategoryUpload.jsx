"use client";

import useAddCategory from "@/hooks/category/useAddCategory";
import { useCategory } from "@/hooks/category/useCategory";
import useUpdateCategory from "@/hooks/category/useUpdateCategory";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Description from "./Description";
import UploadButton from "./UploadButton";

const CategoryUpload = () => {
  const [singleCategory, setSingleCategory] = useState([]);
  const searchParams = useSearchParams();
  const updateId = searchParams.get("id");
  const router = useRouter();

  const { data: category, isSuccess: isCategory } = useCategory(updateId);
  const { mutateAsync: saveCategory, isSuccess } = useAddCategory();
  const { mutateAsync: updateCategory, isSuccess: isUpdate } =
    useUpdateCategory();

  useEffect(() => {
    if (updateId && isCategory) {
      setSingleCategory(category);
    } else {
      setSingleCategory([]);
    }
  }, [updateId, isCategory]);

  useEffect(() => {
    if (isSuccess || isUpdate) {
      toast.success("Category data submitted");
      router.replace("/dashboard/categories");
    }
  }, [isSuccess, isUpdate]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (singleCategory) {
      setValue("name", singleCategory.name || "");
      setValue("slug", singleCategory.slug || "");
      setValue("details", singleCategory.details || "");
    }
  }, [singleCategory, setValue]);

  const formHandler = async (data) => {
    if (!updateId) {
      saveCategory(data);
    } else {
      updateCategory({ id: updateId, data });
    }
  };

  return (
    <div className="divide-y divide-dark-200">
      <h1 className="pb-6 text-lg font-medium dark:text-white">
        Category Upload
      </h1>

      <form onSubmit={handleSubmit(formHandler)}>
        {/* description */}
        <Description register={register} errors={errors} />

        {/* product upload button */}
        <UploadButton />
      </form>
    </div>
  );
};

export default CategoryUpload;
