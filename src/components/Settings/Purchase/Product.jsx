import { useProduct } from "@/hooks/product/useProduct";
import { BiSolidDownload } from "react-icons/bi";
import PurchaseDropdown from "./PurchaseDropdown";

const Product = ({ id }) => {
  const { data } = useProduct(id);
  console.log("data:", data);

  return (
    <div className="flex flex-col justify-between gap-4 py-4 lg:flex-row lg:items-center">
      <div className="flex gap-4">
        <img
          src="/assets/images/card_alt.png"
          alt="alt"
          className="md:w-[150px] w-[120px]"
        />

        <div className="space-y-2">
          <p className="text-xs text-dark-100 whitespace-nowrap">
            Purchased on Sep 7, 2023
          </p>
          <p className="text-sm font-medium cursor-pointer dark:text-light-100 text-dark-500 hover:text-primary line-clamp-2">
            Temprador WooCommerce Landing Page Theme
          </p>
          <p className="text-sm cursor-pointer text-primary">Preview</p>
        </div>
      </div>

      <div className="flex self-end gap-4">
        <button className="p-2 text-xs transition-all bg-transparent border rounded-sm text-primary border-dark-200 dark:hover:bg-dark-200 hover:bg-light-300 active:scale-95">
          Update Preview
        </button>
        <button className="flex items-center gap-2 p-2 text-xs transition-all rounded-sm text-light-100 bg-primary hover:bg-primarySec active:scale-95">
          <BiSolidDownload className="w-4 h-4" />
          Download
        </button>

        {/* dropdown */}
        <PurchaseDropdown />
      </div>
    </div>
  );
};

export default Product;
