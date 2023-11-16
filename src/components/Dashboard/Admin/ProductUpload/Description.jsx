import React from "react";

const Description = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8">
      <div className="space-y-2">
        <h1 className="text-white">Description</h1>
        <p className="text-dark-100">
          Edit your product description and necessary information from here
        </p>
      </div>
      <div className="md:col-span-2 w-full bg-dark-350 rounded p-8 space-y-4"></div>
    </div>
  );
};

export default Description;
