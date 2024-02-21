const Description = ({ register, errors, product }) => {
  return (
    <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 md:grid-cols-3">
      <div className="space-y-2">
        <h1 className="dark:text-white">Description</h1>
        <p className="text-dark-100">
          Edit your product description and necessary information from here
        </p>
      </div>
      <div className="w-full p-8 space-y-4 rounded-sm md:col-span-2 dark:bg-dark-400">
        {/* name */}
        <div className="w-full">
          <label
            htmlFor="name"
            className="inline-block mb-2 text-sm dark:text-white"
          >
            Name
          </label>
          <input
            {...register("name", { required: "name is required" })}
            type="text"
            id="name"
            defaultValue={product?.name ? product.name : ""}
            className={`w-full rounded-sm border dark:border-dark-200 border-light-500 focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition-all duration-300 ${
              errors.name && "border-red-400 focus:border-red-400"
            }`}
          />
          {errors.name && (
            <p className="text-sm text-red-400">*{errors.name.message}</p>
          )}
        </div>

        {/* slug */}
        <div className="w-full">
          <label
            htmlFor="slug"
            className="inline-block mb-2 text-sm dark:text-white"
          >
            Slug
          </label>
          <input
            {...register("slug", { required: "slug is required" })}
            type="text"
            id="slug"
            defaultValue={product?.slug ? product?.slug : ""}
            className={`w-full rounded-sm border dark:border-dark-200 border-light-500 focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition-all duration-300 block ${
              errors.slug && "border-red-400 focus:border-red-400"
            }`}
          />
          {errors.slug && (
            <p className="text-sm text-red-400">*{errors.slug.message}</p>
          )}
        </div>

        {/* description */}
        <div className="w-full">
          <label
            htmlFor="description"
            className="inline-block mb-2 text-sm dark:text-white"
          >
            Description
          </label>
          <textarea
            {...register("description", {
              required: "description is required",
            })}
            id="description"
            defaultValue={product?.description ? product?.description : ""}
            rows={5}
            className={`w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded-sm outline-none dark:border-dark-200 border-light-500 focus:border-primary dark:text-white resize-none ${
              errors.description && "border-red-400 focus:border-red-400"
            }`}
          ></textarea>
          {errors.description && (
            <p className="text-sm text-red-400">
              *{errors.description.message}
            </p>
          )}
        </div>

        {/* status */}
        <div className="w-full">
          <p className="inline-block mb-2 text-sm dark:text-white">Status</p>
          <div className="flex items-center gap-2">
            <input
              {...register("status")}
              name="status"
              type="radio"
              id="published"
              value="Published"
              defaultChecked
              // checked={product?.status === "Published"}
            />
            <label htmlFor="published">Published</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              {...register("status")}
              name="status"
              type="radio"
              id="draft"
              value="Draft"
              // defaultChecked={product?.status === "Draft"}
              // checked={product?.status === "Draft"}
            />
            <label htmlFor="draft">Draft</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
