import LayoutDescription from "@/components/Dashboard/Admin/Layouts-type/CreateLayout/LayoutDescription";
import CreateLayout from "@/components/Dashboard/Admin/Layouts-type/CreateLayout/LayoutDescription";
import GalleryImages from "@/components/Dashboard/Admin/ProductUpload/GalleryImages";
import LayoutCategories from "@/components/Dashboard/Admin/ProductUpload/LayoutCategories";
import React from "react";

const page = () => {
  return (
    <>
      <section className="divide-y divide-dark-200">
        <h1 className="text-white font-medium text-lg pb-6">Create Layout</h1>

        {/* feature image */}
        <LayoutDescription />

        {/* gallery images */}

        {/* layout & categories */}
        <LayoutCategories />
      </section>
    </>
  );
};

export default page;
