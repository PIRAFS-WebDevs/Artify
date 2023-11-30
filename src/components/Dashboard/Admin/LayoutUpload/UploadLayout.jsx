"use client";

import { useForm } from "react-hook-form";
import UploadButton from "./UploadButton";
import Description from "./Description";
import { getLayoutById, saveLayout, updateLayout } from "@/utils/api/layout";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const LayoutUpload = () => {
  const [singleLayout, setSingleLayout] = useState([]);
  const searchParams = useSearchParams();
  const updateId = searchParams.get("id");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  useEffect(() => {
    if (singleLayout) {
      setValue("name", singleLayout.name || "");
      setValue("slug", singleLayout.slug || "");
      setValue("details", singleLayout.details || "");
    }
  }, [singleLayout, setValue]);

  const formHandler = async (data) => {
    if (!updateId) {
      const res = await saveLayout(data);
      if (res.data.success) {
        toast.success("layout is uploaded");
        router.replace("/dashboard/admin/layouts");
      }
    } else if (updateId) {
      const res = await updateLayout(data, updateId);
      if (res.data.success) {
        toast.success("layout is updated");
        router.replace("/dashboard/admin/layouts");
      }
    }
  };
  useEffect(() => {
    (async () => {
      if (!updateId) {
        setSingleLayout([]);
      }
      if (updateId) {
        const layout = await getLayoutById(updateId);
        setSingleLayout(layout);
      }
    })();
  }, [updateId]);

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
