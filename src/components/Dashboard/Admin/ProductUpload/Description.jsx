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
      <div className="md:col-span-2 w-full bg-dark-350 rounded p-8 space-y-4">
        {/* name */}
        <div className="w-full">
          <label
            htmlFor="name"
            className="mb-2 inline-block text-sm dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full rounded border border-dark-200 focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition-all duration-300"
          />
        </div>

        {/* slug */}
        <div className="w-full">
          <label
            htmlFor="slug"
            className="mb-2 inline-block text-sm dark:text-white"
          >
            Slug
          </label>
          <input
            type="text"
            id="slug"
            className="w-full rounded border border-dark-200 focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition-all duration-300"
          />
        </div>

        {/* unit */}
        <div className="w-full">
          <label
            htmlFor="unit"
            className="mb-2 inline-block text-sm dark:text-white"
          >
            Unit
          </label>
          <input
            type="text"
            id="unit"
            className="w-full rounded border border-dark-200 focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition-all duration-300"
          />
        </div>

        {/* description */}
        <div className="w-full">
          <label
            htmlFor="description"
            className="mb-2 inline-block text-sm dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={5}
            className="w-full rounded border border-dark-200 focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition-all duration-300"
          ></textarea>
        </div>

        {/* status */}
        <div className="w-full">
          <p className="mb-2 inline-block text-sm dark:text-white">Status</p>
          <div className="flex gap-2 items-center">
            <input name="radio" type="radio" id="published" />
            <label htmlFor="published">Published</label>
          </div>
          <div className="flex gap-2 items-center">
            <input name="radio" type="radio" id="draft" />
            <label htmlFor="draft">Draft</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
