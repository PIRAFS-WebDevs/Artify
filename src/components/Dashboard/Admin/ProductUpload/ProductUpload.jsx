"use client";

import FeatureImage from "@/components/Dashboard/Admin/ProductUpload/FeatureImage";
import GalleryImages from "@/components/Dashboard/Admin/ProductUpload/GalleryImages";
import LayoutCategories from "@/components/Dashboard/Admin/ProductUpload/layoutCategories";
import Description from "./Description";
import SimpleProductInfo from "./SimpleProductInfo";
import ProductUploadButton from "./ProductUploadButton";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ProductUpload = () => {
  const [featuredImage, setFeaturedImage] = useState();
  const [galleryImage, setGalleryImage] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formHandler = (data) => {
    const {} = data;

    const productData = {
      featuredImage,
      galleryImage,
    };

    console.table(data);
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
        <LayoutCategories register={register} errors={errors} />

        {/* description */}
        <Description register={register} errors={errors} />

        {/* product info */}
        <SimpleProductInfo register={register} errors={errors} />

        {/* product upload button */}
        <ProductUploadButton />
      </form>
    </div>
  );
};

export default ProductUpload;
