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
import toast from "react-hot-toast";
import { getTags } from "@/utils/api/tags";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "@/utils/api/category";

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

const LayoutCategories = ({
  selectedCategories,
  setSelectedCategories,
  selectedTags,
  setSelectedTags,
  register,
  product,
}) => {
  useEffect(() => {
    if (product) {
      console.log("product:", product);

      setSelectedCategories(
        product?.categories ? [...product?.categories] : []
      );
      setSelectedTags(product?.tags ? [...product?.tags] : []);
    }
  }, [product]);

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

  const { data: tags = [] } = useQuery({
    queryKey: ["tags"],
    queryFn: () => getTags(),
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategory(),
  });

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
            defaultValue={product?.layout && product?.layout}
            className="w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded-sm outline-none border-dark-200 focus:border-primary dark:text-white"
          >
            {product?.layout ? (
              <>
                <option
                  value={product?.layout}
                  className="text-white bg-dark-300"
                >
                  {product?.layout}
                </option>
                {layouts.map((layout, i) => (
                  <option
                    key={i}
                    value={layout}
                    className="text-white bg-dark-300"
                  >
                    {layout}
                  </option>
                ))}
              </>
            ) : (
              layouts.map((layout, i) => (
                <option
                  key={i}
                  value={layout}
                  className="text-white bg-dark-300"
                >
                  {layout}
                </option>
              ))
            )}
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
                value={category.name}
                className="text-white bg-dark-300"
              >
                {category.name}
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
              <option
                key={i}
                value={tag.name}
                className="text-white bg-dark-300"
              >
                {tag.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

const layouts = ["Fixed", "Responsive", "Fluid", "N/A"];
