import { FaCloudUploadAlt } from "react-icons/fa";

const SimpleProductInfo = ({ register, errors, product }) => {
  return (
    <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 md:grid-cols-3">
      <div className="space-y-2">
        <h1 className="text-white">Simple Product Information</h1>
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
            className="inline-block mb-2 text-sm dark:text-white"
          >
            Price
          </label>
          <input
            {...register("price", {
              required: "price is required",
            })}
            type="number"
            id="price"
            defaultValue={product?.price ? product?.price : 0}
            className="w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded-sm outline-none border-dark-200 focus:border-primary dark:text-white [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
          />
          {errors.price && (
            <p className="text-sm text-red-400">*{errors.price.message}</p>
          )}
        </div>

        {/* sell price */}
        <div className="w-full">
          <label
            htmlFor="sell_price"
            className="inline-block mb-2 text-sm dark:text-white"
          >
            Sell Price
          </label>
          <input
            {...register("sell_price", {
              required: "sell price is required",
            })}
            type="number"
            id="sell_price"
            className="w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded-sm outline-none border-dark-200 focus:border-primary dark:text-white [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
          />
          {errors.sell_price && (
            <p className="text-sm text-red-500 dark:text-red-400">
              *{errors.sell_price.message}
            </p>
          )}
        </div>

        {/* preview url */}
        <div className="w-full">
          <label
            htmlFor="preview_url"
            className="inline-block mb-2 text-sm dark:text-white"
          >
            Preview URL
          </label>
          <input
            {...register("preview_url")}
            type="text"
            id="preview_url"
            defaultValue={product?.preview_url && product?.preview_url}
            className="w-full px-3 py-2 transition-all duration-300 bg-transparent border rounded-sm outline-none border-dark-200 focus:border-primary dark:text-white"
          />
          {errors.preview_url && (
            <p className="text-xs text-red-500 dark:text-red-400">
              {errors.preview_url.message}
            </p>
          )}
        </div>

        {/* digital file upload */}
        {/* <label
          htmlFor="dropzone-file"
          className="grid gap-2 px-8 py-16 text-center border border-dashed rounded-sm cursor-pointer place-items-center border-dark-100"
        >
          <FaCloudUploadAlt className="w-8 h-8 text-dark-200" />

          <p className="text-dark-100">
            <span className="text-primary">Upload an image</span> or drag and
            drop PNG, JPG
          </p>

          <input id="dropzone-file" type="file" className="hidden w-full" />
        </label> */}
      </div>
    </div>
  );
};

export default SimpleProductInfo;
