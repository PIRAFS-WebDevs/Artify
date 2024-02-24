"use client";

import FeatureImage from "@/components/Dashboard/ProductUpload/FeatureImage";
import GalleryImages from "@/components/Dashboard/ProductUpload/GalleryImages";
import useAddProduct from "@/hooks/product/useAddProduct";
import { useProduct } from "@/hooks/product/useProduct";
import useUpdateProduct from "@/hooks/product/useUpdateProduct";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Description from "./Description";
import LayoutCategories from "./LayoutCategories";
import SimpleProductInfo from "./SimpleProductInfo";
import UploadButton from "./UploadButton";

const ProductUpload = () => {
  const [singleProduct, setSingleProduct] = useState({});
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
  const { data: product, isSuccess: isProductSuccess } = useProduct(updateId);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!updateId) {
      setSingleProduct([]);
    }
    if (updateId && isProductSuccess) {
      setSingleProduct(product);
    }
  }, [updateId, isProductSuccess]);

  useEffect(() => {
    if (singleProduct._id) {
      setValue("price", singleProduct.price || 0);
      setValue("sale_price", singleProduct.sale_price || 0);
      setValue("preview_url", singleProduct.preview_url || "");
      setValue("name", singleProduct.name || "");
      setValue("slug", singleProduct.slug || "");
      setValue("description", singleProduct.description || "");
      setValue("layout", singleProduct.layout || "");
      setFeaturedImage(singleProduct.images[0] || "");
      setGalleryImage([...singleProduct.images.slice(1)]);
    }
  }, [singleProduct, setValue]);

  useEffect(() => {
    if (isSuccess || isUpdateSuccess) {
      toast.success("Product submitted successfully");
      router.replace("/dashboard/products");
    }
  }, [isSuccess, isUpdateSuccess]);

  const formHandler = (data) => {
    const productData = {
      images: [featuredImage, ...galleryImage],
      categories: selectedCategories,
      tags: selectedTags,
      ...data,
    };

    if (updateId) {
      updateProduct({ id: updateId, data: productData });
    } else {
      addProduct(productData);
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
