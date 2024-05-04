import Image from "next/image";
import product1 from "/public/assets/images/product/product_1.png";
import product2 from "/public/assets/images/product/product_2.png";
import product3 from "/public/assets/images/product/product_3.png";

const ProductImages = () => {
  const images = [product1, product2, product3];

  return (
    <div className="grid w-full grid-cols-1 gap-5 my-8 md:grid-cols-2">
      {images.map((image, index) => (
        <div key={index} className="flex ">
          <Image src={image} alt={index} className="object-cover w-full" />
        </div>
      ))}
    </div>
  );
};

export default ProductImages;
