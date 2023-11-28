const Description = ({ register, errors }) => {
  return (
    <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 md:grid-cols-3">
      <div className="space-y-2">
        <h1 className="text-white">Description</h1>
        <p className="text-dark-100">
          Edit your category description and necessary information from here
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
            className={`w-full rounded-sm border border-dark-200 focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition-all duration-300 ${
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
            className={`w-full rounded-sm border border-dark-200 focus:border-primary bg-transparent px-3 py-2 dark:text-white outline-none transition-all duration-300 block ${
              errors.slug && "border-red-400 focus:border-red-400"
            }`}
          />
          {errors.slug && (
            <p className="text-sm text-red-400">*{errors.slug.message}</p>
          )}
        </div>

        {/* details */}
        <div className="w-full">
          <label
            htmlFor="details"
            className="inline-block mb-2 text-sm dark:text-white"
          >
            Details
          </label>
          <textarea
            {...register("details", {
              required: "details is required",
            })}
            id="details"
            rows={5}
            className={`w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded-sm outline-none border-dark-200 focus:border-primary dark:text-white resize-none ${
              errors.details && "border-red-400 focus:border-red-400"
            }`}
          ></textarea>
          {errors.details && (
            <p className="text-sm text-red-400">*{errors.details.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Description;
