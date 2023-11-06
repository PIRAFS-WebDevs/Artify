import React from "react";
import banner1 from "@/app/assets/images/branner/productsBanner1.jpg";
import banner2 from "@/app/assets/images/branner/productsBanner2.jpg";
import banner3 from "@/app/assets/images/branner/productsBanner3.jpg";
import Image from "next/image";

const ProductImages = () => {
  const images = [banner1, banner2, banner3];
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
      {images.map((image, index) => (
        <div key={index} className=" flex  ">
          <Image src={image} alt={index} className="w-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default ProductImages;
