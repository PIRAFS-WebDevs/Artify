// icons
import ImageCarousel from "./ImageCarousel";
import ProductInfo from "./ProductInfo";
import ModalHeader from "./ModalHeader";
import { useContext } from "react";
import SingleProductContext from "@/context/SingleProductContext";

const ProductDetails = ({ setShowProductModal }) => {
  const { singleProductData } = useContext(SingleProductContext);
  const { name, price, layout, tags, description, createdAt, updatedAt, _id } =
    singleProductData;

  return (
    <div className="text-sm dark:text-white">
      {/* product title */}
      <ModalHeader name={name} setShowProductModal={setShowProductModal} />

      <div className="grid grid-cols-1 gap-4 p-4 md:gap-8 md:p-8 lg:grid-cols-2 dark:bg-dark-400">
        {/* product carousel */}
        <ImageCarousel />

        {/* product info */}
        <ProductInfo
          _id={_id}
          price={price}
          layout={layout}
          tags={tags}
          description={description}
          updatedAt={updatedAt}
          createdAt={createdAt}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
