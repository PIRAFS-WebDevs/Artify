"use client";

import toast from "react-hot-toast";
import { FaCloudUploadAlt } from "react-icons/fa";

const GalleryImages = ({ galleryImage, setGalleryImage }) => {
  const handleImage = (e) => {
    const targetImages = e.target.files;
    const currentImages = galleryImage.length + targetImages.length;

    if (currentImages > 3) {
      toast.error("Do not select more than 3 images");
      e.target.value = null;
      return;
    }

    const updatedImages = [...galleryImage];

    for (const imageFile of targetImages) {
      updatedImages.push(imageFile);
    }

    setGalleryImage(updatedImages);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8">
      <div className="space-y-2">
        <h1 className="text-white">Gallery Upload</h1>
        <p className="text-dark-100">
          your product image gallery here Image size should not be more than 2
          MB
        </p>
      </div>

      <div className="md:col-span-2 w-full bg-dark-400 rounded p-8 space-y-4">
        <label
          htmlFor="gallery-image"
          className="grid place-items-center gap-2 px-8 py-16 text-center border border-dark-100 border-dashed rounded cursor-pointer"
        >
          <FaCloudUploadAlt className="w-8 h-8 text-dark-200" />

          <p className="text-dark-100">
            <span className="text-primary">Upload an image</span> or drag and
            drop PNG, JPG
          </p>

          <input
            type="file"
            multiple
            onChange={handleImage}
            id="gallery-image"
            className="hidden w-full"
          />
        </label>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {galleryImage.map((e, i) => (
            <img key={i} src={URL.createObjectURL(e)} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;
