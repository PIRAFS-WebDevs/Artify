import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const SimpleProductInfo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8">
      <div className="space-y-2">
        <h1 className="text-white">Simple Product Information</h1>
        <p className="text-dark-100">
          Edit your simple product description and necessary information from
          here
        </p>
      </div>
      <div className="md:col-span-2 w-full bg-dark-350 rounded p-8 space-y-4">
        {/* price */}
        <div className="w-full">
          <label
            htmlFor="price"
            className="mb-2 inline-block text-sm dark:text-white"
          >
            Price
          </label>
          <input
            type="text"
            id="price"
            className="w-full rounded border border-dark-200 focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition-all duration-300"
          />
        </div>

        {/* sell price */}
        <div className="w-full">
          <label
            htmlFor="sell_price"
            className="mb-2 inline-block text-sm dark:text-white"
          >
            Sell Price
          </label>
          <input
            type="text"
            id="sell_price"
            className="w-full rounded border border-dark-200 focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition-all duration-300"
          />
        </div>

        {/* quantity */}
        <div className="w-full">
          <label
            htmlFor="quantity"
            className="mb-2 inline-block text-sm dark:text-white"
          >
            Quantity
          </label>
          <input
            type="text"
            id="quantity"
            className="w-full rounded border border-dark-200 focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition-all duration-300"
          />
        </div>

        {/* SKU */}

        <div className="w-full">
          <label
            htmlFor="sku"
            className="mb-2 inline-block text-sm dark:text-white"
          >
            SKU
          </label>
          <input
            type="text"
            id="sku"
            className="w-full rounded border border-dark-200 focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition-all duration-300"
          />
        </div>

        {/* preview url */}

        <div className="w-full">
          <label
            htmlFor="preview_url"
            className="mb-2 inline-block text-sm dark:text-white"
          >
            Preview URL
          </label>
          <input
            type="text"
            id="preview_url"
            className="w-full rounded border border-dark-200 focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition-all duration-300"
          />
        </div>

        {/* digital file upload */}
        <label
          htmlFor="dropzone-file"
          className="grid place-items-center gap-2 px-8 py-16 text-center border border-dark-100 border-dashed rounded cursor-pointer"
        >
          <FaCloudUploadAlt className="w-8 h-8 text-dark-200" />

          <p className="text-dark-100">
            <span className="text-primary">Upload an image</span> or drag and
            drop PNG, JPG
          </p>

          <input id="dropzone-file" type="file" className="hidden w-full" />
        </label>
      </div>
    </div>
  );
};

export default SimpleProductInfo;
