"use client";

import { useForm } from "react-hook-form";
import UploadButton from "./UploadButton";
import Description from "./Description";
import {
  getCategoryById,
  getCategoryId,
  saveCategory,
  updateCategory,
} from "@/utils/api/category";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CategoryUpload = () => {
  const [singleCategory, setSingleCategory] = useState([]);
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
    if (singleCategory) {
      setValue("name", singleCategory.name || "");
      setValue("slug", singleCategory.slug || "");
      setValue("details", singleCategory.details || "");
    }
  }, [singleCategory, setValue]);

  const formHandler = async (data) => {
    if (!updateId) {
      const res = await saveCategory(data);
      console.log("saveRes:", res);
      console.table(data);
      if (res.data.success) {
        toast.success("layout is uploaded");
        router.replace("/dashboard/admin/categories");
      }
    } else if (updateId) {
      const res = await updateCategory(data, updateId);
      console.log("updatedRes:", res);
      if (res.data.success) {
        toast.success("Category is updated");
        router.replace("/dashboard/admin/categories");
      }
    }
  };
  useEffect(() => {
    (async () => {
      if (!updateId) {
        setSingleCategory([]);
      }
      if (updateId) {
        const Category = await getCategoryById(updateId);
        setSingleCategory(Category);
      }
    })();
  }, [updateId]);
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
