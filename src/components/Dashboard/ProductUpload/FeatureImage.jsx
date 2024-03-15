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
import { FaCloudUploadAlt } from "react-icons/fa";

const FeatureImage = ({ featuredImage, setFeaturedImage }) => {
  const [loading, setLoading] = useState(false);

  const handleImage = async (event) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      setLoading(true);

      try {
        const name = `${selectedFile.name}_${new Date().getTime()}`;
        const imageRef = ref(storage, `images/${name}`);
        const snapshot = await uploadBytes(imageRef, selectedFile);
        const downloadURL = await getDownloadURL(snapshot.ref);

        setFeaturedImage(downloadURL);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleRemoveImage = async () => {
    if (featuredImage) {
      try {
        const filename = featuredImage.split("/").pop();
        const decodedFile = decodeURIComponent(filename);
        const imageName = decodedFile.split("?")[0];
        const imageRef = ref(storage, imageName);
        await deleteObject(imageRef);

        setFeaturedImage(null);
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 md:grid-cols-3">
      <div className="space-y-2">
        <h1 className="dark:text-light-100">Featured Image</h1>
        <p className="text-dark-100">
          Upload your product featured image here Image size should not be more
          than 2 MB
        </p>
      </div>

      <div className="w-full p-8 space-y-4 rounded-sm md:col-span-2 dark:bg-dark-400">
        <label
          htmlFor="dropzone-file"
          className="grid gap-2 px-8 py-16 text-center border border-dashed rounded-sm cursor-pointer place-items-center border-dark-100"
        >
          <FaCloudUploadAlt className="w-8 h-8 text-dark-200" />

          <p className="text-dark-100">
            <span className="text-primary">Upload an image</span> or drag and
            drop PNG, JPG
          </p>

          <input
            onChange={handleImage}
            id="dropzone-file"
            type="file"
            accept="image/jpeg, image/png"
            className="hidden w-full"
          />
        </label>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-5">
          {featuredImage && (
            <div className="relative">
              <Image
                width={400}
                height={400}
                className="w-[10rem]"
                src={featuredImage}
                alt="featuredImage"
              />
              <span
                onClick={handleRemoveImage}
                className="absolute px-1.5 text-sm rounded-full cursor-pointer dark:text-light-100 -top-2 -right-2 bg-primary"
              >
                x
              </span>
            </div>
          )}

          {loading && <Skeleton className="w-[8rem] h-[8rem] rounded" />}
        </div>
      </div>
    </div>
  );
};

export default FeatureImage;
