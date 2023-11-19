"use client";

import FeatureImage from "@/components/Dashboard/Admin/ProductUpload/FeatureImage";
import GalleryImages from "@/components/Dashboard/Admin/ProductUpload/GalleryImages";
import LayoutCategories from "@/components/Dashboard/Admin/ProductUpload/layoutCategories";
import Description from "./Description";
import SimpleProductInfo from "./SimpleProductInfo";
import ProductUploadButton from "./ProductUploadButton";
import { useState } from "react";

const ProductUpload = () => {
  const [featuredImage, setFeaturedImage] = useState();
  const [galleryImage, setGalleryImage] = useState([]);

  const productData = {
    featuredImage,
    galleryImage,
  };

  return (
    <div className="divide-y divide-dark-200">
      <h1 className="text-white font-medium text-lg pb-6">Product Upload</h1>

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

      {/* layout & categories */}
      <LayoutCategories />

      {/* description */}
      <Description />

      {/* product info */}
      <SimpleProductInfo />

      {/* product upload button */}
      <ProductUploadButton />
    </div>
  );
};

export default ProductUpload;
