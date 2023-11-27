"use client";

import { useForm } from "react-hook-form";
import UploadButton from "./UploadButton";
import Description from "./Description";
import { saveLayout } from "@/utils/api/layout";

const LayoutUpload = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formHandler = (data) => {
    saveLayout(data);
    console.table(data);
  };

  return (
    <div className="divide-y divide-dark-200">
      <h1 className="pb-6 text-lg font-medium text-white">Layout Upload</h1>

      <form onSubmit={handleSubmit(formHandler)}>
        {/* description */}
        <Description register={register} errors={errors} />

        {/* layout upload button */}
        <UploadButton />
      </form>
    </div>
  );
};

export default LayoutUpload;
