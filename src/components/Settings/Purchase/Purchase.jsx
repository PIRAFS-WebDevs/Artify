import { BiSolidDownload } from "react-icons/bi";
import PurchaseDropdown from "./PurchaseDropdown";

const Purchase = () => {
  return (
    <div className="space-y-4">
      <p>
        My Purchase List <span className="text-dark-100">({10})</span>
      </p>

      <div className="flex flex-col divide-y divide-dark-200">
        {[1, 2, 3, 4, 5, 6].map((e, i) => (
          <div
            key={i}
            className="flex flex-col justify-between gap-4 py-4 lg:flex-row lg:items-center"
          >
            <div className="flex gap-4">
              <img
                src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F803%2Fconversions%2Fimage16-thumbnail.jpg&w=2048&q=100"
                alt=""
                className="md:w-[150px] w-[120px]"
              />

              <div className="space-y-2">
                <p className="text-xs text-dark-100 whitespace-nowrap">
                  Purchased on Sep 7, 2023
                </p>
                <p className="text-sm font-medium text-white cursor-pointer hover:text-primary line-clamp-2">
                  Temprador WooCommerce Landing Page Theme
                </p>
                <p className="text-sm cursor-pointer text-primary">Preview</p>
              </div>
            </div>

            <div className="flex self-end gap-4">
              <button className="p-2 text-xs transition-all bg-transparent border rounded text-primary border-dark-200 hover:bg-dark-200 active:scale-95">
                Update Preview
              </button>
              <button className="flex items-center gap-2 p-2 text-xs text-white transition-all rounded bg-primary hover:bg-primarySec active:scale-95">
                <BiSolidDownload className="w-4 h-4" />
                Download
              </button>

              {/* dropdown */}
              <PurchaseDropdown />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purchase;
