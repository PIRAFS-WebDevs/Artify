import FeatureImage from "@/components/Dashboard/Admin/ProductUpload/FeatureImage";
import GalleryImages from "@/components/Dashboard/Admin/ProductUpload/GalleryImages";
import LayoutCategories from "@/components/Dashboard/Admin/ProductUpload/layoutCategories";

const ProductUpload = () => {
  return (
    <div className="divide-y divide-dark-200">
      <h1 className="text-white font-medium text-lg pb-6">Product Upload</h1>

      {/* feature image */}
      <FeatureImage />

      {/* gallery images */}
      <GalleryImages />

      {/* layout & categories */}
      <LayoutCategories />
    </div>
  );
};

export default ProductUpload;
