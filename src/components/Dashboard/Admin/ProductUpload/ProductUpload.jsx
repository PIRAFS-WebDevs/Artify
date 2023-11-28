"use client";

import FeatureImage from "@/components/Dashboard/Admin/ProductUpload/FeatureImage";
import GalleryImages from "@/components/Dashboard/Admin/ProductUpload/GalleryImages";
import SimpleProductInfo from "./SimpleProductInfo";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { saveProduct } from "@/utils/api/product";
import Description from "./Description";
import UploadButton from "./UploadButton";

const ProductUpload = () => {
  const [featuredImage, setFeaturedImage] = useState();
  const [galleryImage, setGalleryImage] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formHandler = (data) => {
    const productData = {
      images: [featuredImage, ...galleryImage],
      categories: selectedCategories,
      tags: selectedTags,
      ...data,
    };

    saveProduct(productData);
    //console.table(productData);
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
          setSelectedTags={setSelectedTags}
        />

        {/* description */}
        <Description register={register} errors={errors} />

        {/* product info */}
        <SimpleProductInfo register={register} errors={errors} />

        {/* product upload button */}
        <UploadButton />
      </form>
    </div>
  );
};

export default ProductUpload;

const LayoutCategories = ({
  selectedCategories,
  setSelectedCategories,
  selectedTags,
  setSelectedTags,
  register,
}) => {
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    if (!selectedCategories.includes(selectedCategory)) {
      setSelectedCategories([...selectedCategories, selectedCategory]);
    }
  };

  const handleTagChange = (event) => {
    const selectedTag = event.target.value;
    if (!selectedTags.includes(selectedTag)) {
      setSelectedTags([...selectedTags, selectedTag]);
    }
  };

  const removeCategory = (category) => {
    const updatedCategories = selectedCategories.filter((c) => c !== category);
    setSelectedCategories(updatedCategories);
  };

  const removeTag = (tag) => {
    const updatedTags = selectedTags.filter((t) => t !== tag);
    setSelectedTags(updatedTags);
  };

  return (
    <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 md:grid-cols-3">
      <div className="space-y-2">
        <h1 className="text-white">Layout & Categories</h1>
        <p className="text-dark-100">
          Select product group and categories from here
        </p>
      </div>

      <div className="w-full p-8 space-y-4 rounded-sm md:col-span-2 dark:bg-dark-400">
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
            className="w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded-sm outline-none border-dark-200 focus:border-primary dark:text-white"
          >
            {layouts.map((layout, i) => (
              <option key={i} value={layout} className="text-white bg-dark-300">
                {layout}
              </option>
            ))}
          </select>
        </div>
        {/* categories */}
        <div className="w-full space-y-2">
          <label className="inline-block text-sm dark:text-white">
            Selected Categories:
          </label>
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map((category, i) => (
              <div key={i} className="relative">
                <span className="px-2 py-1 text-white rounded-sm bg-dark-300">
                  {category}
                </span>
                <span
                  className="absolute px-1.5 text-sm rounded-full cursor-pointer dark:text-white -top-2 -right-2 bg-primary"
                  onClick={() => removeCategory(category)}
                >
                  x
                </span>
              </div>
            ))}
          </div>
          <select
            id="category"
            className="w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded-sm outline-none border-dark-200 focus:border-primary dark:text-white"
            onChange={handleCategoryChange}
          >
            <option value="" disabled selected>
              Select a category
            </option>
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
        <div className="w-full space-y-2">
          <label className="inline-block text-sm dark:text-white">
            Selected Tags:
          </label>
          <div className="flex flex-wrap gap-2">
            {selectedTags.map((tag, i) => (
              <div key={i} className="relative">
                <span className="px-2 py-1 text-white rounded-sm bg-dark-300">
                  {tag}
                </span>
                <span
                  className="absolute px-1.5 text-sm rounded-full cursor-pointer dark:text-white -top-2 -right-2 bg-primary"
                  onClick={() => removeTag(tag)}
                >
                  x
                </span>
              </div>
            ))}
          </div>
          <select
            id="tags"
            className="w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded-sm outline-none border-dark-200 focus:border-primary dark:text-white"
            onChange={handleTagChange}
          >
            <option value="" disabled selected>
              Select a tag
            </option>
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
