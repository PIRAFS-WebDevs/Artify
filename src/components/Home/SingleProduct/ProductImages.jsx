import Image from "next/image";
import banner1 from "/public/assets/images/branner/productsBanner1.jpg";
import banner2 from "/public/assets/images/branner/productsBanner2.jpg";
import banner3 from "/public/assets/images/branner/productsBanner3.jpg";

const ProductImages = () => {
  const images = [banner1, banner2, banner3];

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
