"use client";

import { storage } from "@/config/firebaseConfig";
import { Skeleton } from "@nextui-org/react";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaCloudUploadAlt } from "react-icons/fa";

const GalleryImages = ({ galleryImage, setGalleryImage }) => {
  const [loading, setLoading] = useState(false);

  const handleImage = async (e) => {
    const targetImages = e.target.files;
    const currentImages = galleryImage.length + targetImages.length;

    if (currentImages > 3) {
      toast.error("Maximum 3 images select");
      e.target.value = null;
      return;
    }

    const updatedImages = [...galleryImage];

    for (const imageFile of targetImages) {
      if (imageFile) {
        setLoading(true);

        try {
          const name = `${imageFile.name}_${new Date().getTime()}`;
          const imageRef = ref(storage, `images/${name}`);
          const snapshot = await uploadBytes(imageRef, imageFile);
          const downloadURL = await getDownloadURL(snapshot.ref);

          updatedImages.push(downloadURL);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.error("Error uploading image:", error);
        }
      }
    }

    setGalleryImage(updatedImages);
  };

  const handleRemoveImage = async (image) => {
    if (image) {
      try {
        const filename = image.split("/").pop();
        const decodedFile = decodeURIComponent(filename);
        const imageName = decodedFile.split("?")[0];
        const imageRef = ref(storage, imageName);
        await deleteObject(imageRef);

        setGalleryImage((prev) => prev.filter((img) => img !== image));
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 md:grid-cols-3">
      <div className="space-y-2">
        <h1 className="dark:text-light-100">Gallery Upload</h1>
        <p className="text-dark-100">
          your product image gallery here Image size should not be more than 2
          MB
        </p>
      </div>

      <div className="w-full p-8 space-y-4 rounded-sm md:col-span-2 dark:bg-dark-400">
        <label
          htmlFor="gallery-image"
          className="grid gap-2 px-8 py-16 text-center border border-dashed rounded-sm cursor-pointer place-items-center border-dark-100"
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
            accept="image/jpeg, image/png"
            id="gallery-image"
            className="hidden w-full"
          />
        </label>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-5">
          {galleryImage.length !== 0 &&
            galleryImage.map((image, i) => (
              <div key={i} className="relative">
                <Image
                  width={400}
                  height={400}
                  className="w-[10rem]"
                  src={image}
                  alt="image"
                />
                <span
                  onClick={() => handleRemoveImage(image)}
                  className="absolute px-1.5 text-sm rounded-full cursor-pointer dark:text-light-100 -top-2 -right-2 bg-primary"
                >
                  x
                </span>
              </div>
            ))}
          {loading && <Skeleton className="w-[8rem] h-[8rem] rounded" />}
        </div>
      </div>
    </div>
  );
};

export default GalleryImages;
