"use client";

import { useForm } from "react-hook-form";
import UploadButton from "./UploadButton";
import Description from "./Description";
import { saveCategory } from "@/utils/api/category";

const CategoryUpload = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formHandler = (data) => {
    saveCategory(data);
    console.table(data);
  };

  return (
    <div className="divide-y divide-dark-200">
      <h1 className="pb-6 text-lg font-medium text-white">Category Upload</h1>

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
