"use client";

import FeatureImage from "@/components/Dashboard/ProductUpload/FeatureImage";
import GalleryImages from "@/components/Dashboard/ProductUpload/GalleryImages";
import useAddProduct from "@/hooks/product/useAddProduct";
import useUpdateProduct from "@/hooks/product/useUpdateProduct";
import { getProductById } from "@/utils/api/product";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Description from "./Description";
import LayoutCategories from "./LayoutCategories";
import SimpleProductInfo from "./SimpleProductInfo";
import UploadButton from "./UploadButton";

const ProductUpload = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const [featuredImage, setFeaturedImage] = useState();
  const [galleryImage, setGalleryImage] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const searchParams = useSearchParams();
  const updateId = searchParams.get("id");
  const router = useRouter();

  const { mutateAsync: addProduct, isSuccess } = useAddProduct();
  const { mutateAsync: updateProduct, isSuccess: isUpdateSuccess } =
    useUpdateProduct();

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (singleProduct) {
      setValue("price", singleProduct.price || 0);
      setValue("sell_price", singleProduct.sell_price || 0);
      setValue("preview_url", singleProduct.preview_url || "");
      setValue("name", singleProduct.name || "");
      setValue("slug", singleProduct.slug || "");
      setValue("description", singleProduct.description || "");
    }
  }, [singleProduct, setValue]);

  useEffect(() => {
    (async () => {
      if (!updateId) {
        setSingleProduct([]);
      }
      if (updateId) {
        const response = await getProductById(updateId);
        response.success
          ? setSingleProduct(response.data)
          : setSingleProduct([]);
      }
    })();
  }, [updateId]);

  const formHandler = (data) => {
    const productData = {
      images: [featuredImage, ...galleryImage],
      categories: selectedCategories,
      tags: selectedTags,
      ...data,
    };

    if (updateId) {
      updateProduct(updateId, productData);
      if (isUpdateSuccess) {
        toast.success("Product updated successfully");
        router.replace("/dashboard/products");
      }
    } else {
      addProduct(productData);
      if (isSuccess) {
        toast.success("product added successfully");
        router.replace("/dashboard/products");
      }
    }
  };

  return (
    <div className="divide-y divide-dark-200">
      <h1 className="pb-6 text-lg font-medium dark:text-white">
        Product Upload
      </h1>

      {/* feature image */}
      <FeatureImage
        featuredImage={featuredImage}
        setFeaturedImage={setFeaturedImage}
      />

      {/* gallery images */}
      <GalleryImages
        galleryImage={galleryImage}
        setGalleryImage={setGalleryImage}
      />

      <form onSubmit={handleSubmit(formHandler)}>
        {/* layout & categories */}
        <LayoutCategories
          register={register}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedTags={selectedTags}
          product={singleProduct}
          setSelectedTags={setSelectedTags}
        />

        {/* description */}
        <Description
          product={singleProduct}
          register={register}
          errors={errors}
        />

        {/* product info */}
        <SimpleProductInfo
          product={singleProduct}
          register={register}
          errors={errors}
        />

        {/* product upload button */}
        <UploadButton />
      </form>
    </div>
  );
};

export default ProductUpload;
