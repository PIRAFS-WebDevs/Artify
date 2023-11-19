import React from "react";

const ProductUploadButton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div></div>
      <div className="md:col-span-2 w-full rounded p-8 space-y-4">
        <div className="flex gap-8 justify-end">
          <button
            className="bg-transparent text-white text-sm font-semibold px-6 py-4 rounded-md border border-dark-200 hover:bg-primarySec
           transition-all active:scale-95"
          >
            Back
          </button>
          <button
            className="bg-primary text-white text-sm font-semibold px-6 py-4 rounded-md hover:bg-primarySec
           transition-all active:scale-95"
          >
            Upload Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductUploadButton;
