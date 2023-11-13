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
            className="flex flex-col gap-4 lg:flex-row justify-between lg:items-center py-4"
          >
            <div className="flex gap-4">
              <img
                src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F803%2Fconversions%2Fimage16-thumbnail.jpg&w=2048&q=100"
                alt=""
                className="w-[150px]"
              />

              <div className="space-y-2">
                <p className="text-dark-100 text-xs">
                  Purchased on Sep 7, 2023
                </p>
                <p className="text-white text-sm font-medium hover:text-primary cursor-pointer line-clamp-2">
                  Temprador WooCommerce Landing Page Theme
                </p>
                <p className="text-primary text-sm cursor-pointer">Preview</p>
              </div>
            </div>

            <div className="flex gap-4 self-end">
              <button className="bg-transparent text-primary text-xs font-medium p-3 rounded border border-dark-200 hover:bg-dark-200 transition-all active:scale-95">
                Update Preview
              </button>
              <button
                className="bg-primary text-white text-xs font-medium p-3 rounded hover:bg-primarySec
           transition-all active:scale-95 flex gap-2 items-center"
              >
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
