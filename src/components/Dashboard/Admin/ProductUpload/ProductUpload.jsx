"use client";

import FeatureImage from "@/components/Dashboard/Admin/ProductUpload/FeatureImage";
import GalleryImages from "@/components/Dashboard/Admin/ProductUpload/GalleryImages";
import SimpleProductInfo from "./SimpleProductInfo";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ProductByid, saveProduct, updateProduct } from "@/utils/api/product";
import Description from "./Description";
import UploadButton from "./UploadButton";
import { useSearchParams } from "next/navigation";
import LayoutCategories from "./LayoutCategories";

const ProductUpload = () => {
  const [singleProduct, setSingleProduct] = useState([]);

  const [featuredImage, setFeaturedImage] = useState();
  const [galleryImage, setGalleryImage] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [selectedTags, setSelectedTags] = useState([]);
  const searchParams = useSearchParams();
  const updateId = searchParams.get("id");
  console.log("singleProduct:", singleProduct);
  console.log("selectedCategories:", selectedCategories);
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
        const product = await ProductByid(updateId);
        setSingleProduct(product);
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
      updateProduct(productData, updateId);
    } else {
      saveProduct(productData);
    }
  };

  return (
    <div className="divide-y divide-dark-200">
      <h1 className="pb-6 text-lg font-medium text-white">Product Upload</h1>

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
