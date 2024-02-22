"use client";

import useAddLayout from "@/hooks/layout/useAddLayout";
import { useLayout } from "@/hooks/layout/useLayout";
import useUpdateLayout from "@/hooks/layout/useUpdateLayout";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Description from "./Description";
import UploadButton from "./UploadButton";

const LayoutUpload = () => {
  const [singleLayout, setSingleLayout] = useState([]);
  const searchParams = useSearchParams();
  const updateId = searchParams.get("id");
  const router = useRouter();

  const { data: layout, isSuccess: isLayout } = useLayout(updateId);
  const { mutateAsync: saveLayout, isSuccess } = useAddLayout();
  const { mutateAsync: updateLayout, isSuccess: isUpdate } = useUpdateLayout();

  useEffect(() => {
    if (updateId && isLayout) {
      setSingleLayout(layout);
    } else {
      setSingleLayout([]);
    }
  }, [updateId, isLayout]);

  useEffect(() => {
    if (isSuccess || isUpdate) {
      toast.success("Layout data submitted");
      router.replace("/dashboard/layouts");
    }
  }, [isSuccess, isUpdate]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (singleLayout) {
      setValue("name", singleLayout.name || "");
      setValue("slug", singleLayout.slug || "");
      setValue("details", singleLayout.details || "");
    }
  }, [singleLayout, setValue]);

  const formHandler = async (data) => {
    if (!updateId) {
      saveLayout(data);
    } else {
      updateLayout({ id: updateId, data });
    }
  };

  return (
    <div className="divide-y divide-dark-200">
      <h1 className="pb-6 text-lg font-medium dark:text-white">
        Layout Upload
      </h1>

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
