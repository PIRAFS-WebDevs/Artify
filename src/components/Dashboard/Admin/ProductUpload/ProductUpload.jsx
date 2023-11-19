"use client";

import FeatureImage from "@/components/Dashboard/Admin/ProductUpload/FeatureImage";
import GalleryImages from "@/components/Dashboard/Admin/ProductUpload/GalleryImages";
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
    const productData = {
      featuredImage,
      galleryImage,
      ...data,
    };

    console.table(productData);
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
        <LayoutCategories register={register} />

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

const LayoutCategories = ({ register }) => {
  return (
    <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 md:grid-cols-3">
      <div className="space-y-2">
        <h1 className="text-white">Layout & Categories</h1>
        <p className="text-dark-100">
          Select product group and categories from here
        </p>
      </div>

      <div className="w-full p-8 space-y-4 rounded md:col-span-2 bg-dark-350">
        {/* layout */}
        <div className="w-full">
          <label
            htmlFor="layout"
            className="inline-block mb-2 text-sm dark:text-white"
          >
            Layout
          </label>
          <select
            {...register("layout")}
            id="layout"
            className="w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded outline-none border-dark-200 focus:border-primary dark:text-white"
          >
            {layouts.map((layout, i) => (
              <option key={i} value={layout} className="text-white bg-dark-300">
                {layout}
              </option>
            ))}
          </select>
        </div>

        {/* categories */}
        <div className="w-full">
          <label
            htmlFor="category"
            className="inline-block mb-2 text-sm dark:text-white"
          >
            Category
          </label>

          {/* categories list */}
          <select
            {...register("category")}
            id="category"
            className="w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded outline-none border-dark-200 focus:border-primary dark:text-white"
          >
            {categories.map((category, i) => (
              <option
                key={i}
                value={category}
                className="text-white bg-dark-300"
              >
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* tags */}
        <div className="w-full">
          <label
            htmlFor="tags"
            className="inline-block mb-2 text-sm dark:text-white"
          >
            Tags
          </label>
          <select
            {...register("tags")}
            className="w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded outline-none border-dark-200 focus:border-primary dark:text-white"
          >
            {tags.map((tag, i) => (
              <option key={i} value={tag} className="text-white bg-dark-300">
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

const layouts = ["Fixed", "Responsive", "Fluid", "N/A"];

const categories = ["Shopify", "React Native", "Angular", "Vue", "N/A"];

const tags = [
  "Modern",
  "E-Commerce",
  "Dashboard",
  "Web Design",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
];
