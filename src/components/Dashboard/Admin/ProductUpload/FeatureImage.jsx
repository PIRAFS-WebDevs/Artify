import { FaCloudUploadAlt } from "react-icons/fa";

const FeatureImage = ({ featuredImage, setFeaturedImage }) => {
  const handleImage = (e) => {
    const targetImage = e.target.files[0];
    setFeaturedImage(targetImage);

    e.target.value = null;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8">
      <div className="space-y-2">
        <h1 className="text-white">Featured Image</h1>
        <p className="text-dark-100">
          Upload your product featured image here Image size should not be more
          than 2 MB
        </p>
      </div>

      <div className="md:col-span-2 w-full bg-dark-350 rounded p-8 space-y-4">
        <label
          htmlFor="dropzone-file"
          className="grid place-items-center gap-2 px-8 py-16 text-center border border-dark-100 border-dashed rounded cursor-pointer"
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
            className="hidden w-full"
          />
        </label>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          <img
            src={featuredImage ? URL.createObjectURL(featuredImage) : null}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureImage;
