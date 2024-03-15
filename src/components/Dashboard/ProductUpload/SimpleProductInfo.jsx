const SimpleProductInfo = ({ register, errors, product }) => {
  return (
    <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 md:grid-cols-3">
      <div className="space-y-2">
        <h1 className="dark:text-light-100">Simple Product Information</h1>
        <p className="text-dark-100">
          Edit your simple product description and necessary information from
          here
        </p>
      </div>
      <div className="w-full p-8 space-y-4 rounded-sm md:col-span-2 dark:bg-dark-400">
        {/* price */}
        <div className="w-full">
          <label
            htmlFor="price"
            className="inline-block mb-2 text-sm dark:text-light-100"
          >
            Price
          </label>
          <input
            {...register("price", {
              required: "price is required",
              pattern: {
                value: /^\d+(\.\d{1,2})?$/,
                message: "Invalid price format",
              },
            })}
            type="text"
            id="price"
            defaultValue={product?.price ? product?.price : 0}
            className="w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded-sm outline-none border-light-500 dark:border-dark-200 focus:border-primary dark:text-light-100"
          />
          {errors.price && (
            <p className="text-sm text-red-400">*{errors.price.message}</p>
          )}
        </div>

        {/* sell price */}
        <div className="w-full">
          <label
            htmlFor="sale_price"
            className="inline-block mb-2 text-sm dark:text-light-100"
          >
            Sell Price
          </label>
          <input
            {...register("sale_price", {
              required: "sale price is required",
              pattern: {
                value: /^\d+(\.\d{1,2})?$/,
                message: "Invalid sale price format",
              },
            })}
            type="text"
            id="sale_price"
            defaultValue={product?.sale_price ? product?.sale_price : 0}
            className="w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded-sm outline-none border-light-500 dark:border-dark-200 focus:border-primary dark:text-light-100"
          />
          {errors.sale_price && (
            <p className="text-sm text-red-500 dark:text-red-400">
              *{errors.sale_price.message}
            </p>
          )}
        </div>

        {/* preview url */}
        <div className="w-full">
          <label
            htmlFor="preview_url"
            className="inline-block mb-2 text-sm dark:text-light-100"
          >
            Preview URL
          </label>
          <input
            {...register("preview_url")}
            type="text"
            id="preview_url"
            defaultValue={product?.preview_url && product?.preview_url}
            className="w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded-sm outline-none border-light-500 dark:border-dark-200 focus:border-primary dark:text-light-100"
          />
          {errors.preview_url && (
            <p className="text-xs text-red-500 dark:text-red-400">
              {errors.preview_url.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimpleProductInfo;
