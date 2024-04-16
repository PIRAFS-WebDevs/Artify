import { useProduct } from "@/hooks/product/useProduct";
import { useAllValueContext } from "@/hooks/useAllValueContext";
import ImageCarousel from "./ImageCarousel";
import ModalHeader from "./ModalHeader";
import ProductInfo from "./ProductInfo";

const ProductDetails = ({ setShowProductModal }) => {
  const { productId } = useAllValueContext();

  const { data: product } = useProduct(productId);

  const {
    name,
    price,
    layout,
    tags,
    description,
    createdAt,
    updatedAt,
    _id,
    images,
  } = product || {};

  return (
    <div className="text-sm dark:text-light-100 text-dark-200">
      {/* product title */}
      <ModalHeader
        name={name}
        setShowProductModal={setShowProductModal}
        _id={_id}
      />

      <div
        className={`grid grid-cols-1 gap-4 p-4 md:gap-8 md:p-8 lg:grid-cols-2 dark:bg-dark-400 ${
          images?.length === 0 ? "md:min-h-[35rem]" : ""
        }`}
      >
        {/* product carousel */}
        <ImageCarousel images={images} />

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
