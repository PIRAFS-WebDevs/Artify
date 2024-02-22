"use client";

import { getCategories } from "@/utils/api/category";
import { getLayout } from "@/utils/api/layout";
import { getTags } from "@/utils/api/tag";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

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
    queryFn: () => getCategories(),
  });

  const { data: layouts = [] } = useQuery({
    queryKey: ["layouts"],
    queryFn: () => getLayout(),
  });

  return (
    <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 md:grid-cols-3">
      <div className="space-y-2">
        <h1 className="dark:text-white">Layout & Categories</h1>
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
            className="w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded-sm outline-none dark:border-dark-200 border-light-500 focus:border-primary dark:text-white"
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
                    value={layout.name}
                    className="text-white bg-dark-300"
                  >
                    {layout.name}
                  </option>
                ))}
              </>
            ) : (
              layouts.map((layout, i) => (
                <option
                  key={i}
                  value={layout.name}
                  className="text-white bg-dark-300"
                >
                  {layout.name}
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
                <span className="px-2 py-1 rounded-sm dark:text-white text-dark-300 dark:bg-dark-300 bg-light-500">
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
            className="w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded-sm outline-none dark:border-dark-200 border-light-500 focus:border-primary dark:text-white"
            onChange={handleCategoryChange}
          >
            <option value="" disabled selected hidden>
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
                <span className="px-2 py-1 rounded-sm dark:text-white text-dark-300 dark:bg-dark-300 bg-light-500">
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
            className="w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded-sm outline-none dark:border-dark-200 border-light-500 focus:border-primary dark:text-white"
            onChange={handleTagChange}
          >
            <option value="" disabled selected hidden>
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

export default LayoutCategories;
