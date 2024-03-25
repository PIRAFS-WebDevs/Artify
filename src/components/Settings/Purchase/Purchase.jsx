"use client";

import { useGetPaymentByEmail } from "@/hooks/payment/useGetPaymentByEmail";
import { Skeleton } from "@nextui-org/react";
import { BiSolidDownload } from "react-icons/bi";
import PurchaseDropdown from "./PurchaseDropdown";

const Purchase = () => {
  const { data: payments = [], isLoading } = useGetPaymentByEmail();
  console.log("payments:", payments);

  return (
    <div className="space-y-4">
      <p className="dark:text-light-100 text-dark-500">
        My Purchase List{" "}
        <span className="dark:text-dark-100 text-dark-300">({10})</span>
      </p>

      {isLoading ? (
        Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex w-full gap-4">
            <Skeleton className="w-40 h-32" />
            <div className="w-full space-y-4">
              <div className="flex flex-col w-full gap-4">
                <Skeleton className="w-[40%] h-6" />
                <Skeleton className="w-full h-8" />
              </div>
              <div className="flex justify-end gap-4">
                <Skeleton className="w-16 h-8" />
                <Skeleton className="w-16 h-8" />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col divide-y divide-dark-200">
          {payments.map((e, i) => (
            <div
              key={i}
              className="flex flex-col justify-between gap-4 py-4 lg:flex-row lg:items-center"
            >
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
          ))}
        </div>
      )}
    </div>
  );
};

export default Purchase;
