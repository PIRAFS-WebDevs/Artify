// icons
import ImageCarousel from "./ImageCarousel";
import ProductInfo from "./ProductInfo";
import ModalHeader from "./ModalHeader";

const ProductDetails = ({ setIsShow }) => {
  return (
    <div className="text-white text-sm">
      {/* product title */}
      <ModalHeader setIsShow={setIsShow} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 bg-darkSec">
        {/* product carousel */}
        <ImageCarousel />

        {/* product info */}
        <ProductInfo />
      </div>
    </div>
  );
};

export default ProductDetails;
