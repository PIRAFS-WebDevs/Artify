"use client";

import { useGetPaymentByEmail } from "@/hooks/payment/useGetPaymentByEmail";
import { useProduct } from "@/hooks/product/useProduct";
import { Divider, Skeleton } from "@nextui-org/react";
import Link from "next/link";
import { BiSolidDownload } from "react-icons/bi";
import { IoMdCheckmark } from "react-icons/io";

const PurchaseDetails = ({ id }) => {
  const { data: payments = [], isLoading } = useGetPaymentByEmail();
  const products = payments.flatMap((item) => item.products);
  const product = products.find((item) => item === id);
  const { data, isLoading: productLoading } = useProduct(product);

  const paymentInfo = payments.find((item) =>
    item.products.find((existingId) => existingId === id)
  );

  return (
    <div>
      {/* header */}
      <div className="flex flex-col justify-between gap-4 px-6 py-4 md:flex-row dark:bg-dark-300 bg-light-300">
        <p className="text-sm text-dark-500 dark:text-light-100">
          Order Status:{" "}
          <span className="px-2 py-1 text-[12px] whitespace-nowrap font-semibold text-white uppercase rounded-full bg-primary">
            Order Completed
          </span>
        </p>

        <p className="text-sm text-dark-500 dark:text-light-100">
          Payment Status:{" "}
          <span className="px-2 py-1 text-[12px] whitespace-nowrap font-semibold text-white uppercase rounded-full bg-primary">
            Payment Success
          </span>
        </p>
      </div>

      {isLoading || productLoading ? (
        <div className="py-6 space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
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
          ))}
        </div>
      ) : (
        <div className="px-6 py-8 space-y-8 dark:bg-dark-400 md:dark:bg-dark-500 bg-light-200">
          {/* stats card */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-10 text-[12px] bg-transparent border rounded dark:border-dark-300 border-light-500">
              <p className="text-dark-100">Order Number:</p>
              <p className="text-dark-500 dark:text-light-100">
                {paymentInfo?._id}
              </p>
            </div>
            <div className="p-10 text-[12px] bg-transparent border rounded dark:border-dark-300 border-light-500">
              <p className="text-dark-100">Date:</p>
              <p className="text-dark-500 dark:text-light-100">
                {paymentInfo?.createdAt?.slice(0, 10)}
              </p>
            </div>
            <div className="p-10 text-[12px] bg-transparent border rounded dark:border-dark-300 border-light-500">
              <p className="text-dark-100">Total:</p>
              <p className="text-dark-500 dark:text-light-100">
                {paymentInfo?.total}
              </p>
            </div>
            <div className="p-10 text-[12px] bg-transparent border rounded dark:border-dark-300 border-light-500">
              <p className="text-dark-100">Payment Method:</p>
              <p className="text-dark-500 dark:text-light-100">STRIPE</p>
            </div>
          </div>

          {/* order status */}
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <div className="space-y-4 md:w-1/2">
              <h1 className="font-semibold text-dark-500 dark:text-light-100">
                Order Status
              </h1>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-dark-100 dark:bg-dark-300">
                    <IoMdCheckmark />
                  </div>
                  <p className="text-sm text-dark-500 dark:text-light-100">
                    Order Pending
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-dark-100 dark:bg-dark-300">
                    <IoMdCheckmark />
                  </div>
                  <p className="text-sm text-dark-500 dark:text-light-100">
                    Order Completed
                  </p>
                </div>
              </div>
            </div>

            {/* order details */}
            <div className="space-y-4 md:w-1/2">
              <h1 className="font-semibold text-dark-500 dark:text-light-100">
                Order Details
              </h1>

              <div className="space-y-4 text-sm">
                <p className="grid grid-cols-3 text-dark-100">
                  Total Items :{" "}
                  <span className="text-dark-500 dark:text-light-100">
                    1 Item
                  </span>
                </p>
                <p className="grid grid-cols-3 text-dark-100">
                  Sub Total :{" "}
                  <span className="text-dark-500 dark:text-light-100">
                    ${paymentInfo?.total}
                  </span>
                </p>
                <p className="grid grid-cols-3 text-dark-100">
                  Tax :{" "}
                  <span className="text-dark-500 dark:text-light-100">$00</span>
                </p>

                <Divider />

                <p className="grid grid-cols-3 text-dark-100">
                  Total :{" "}
                  <span className="text-dark-500 dark:text-light-100">
                    ${paymentInfo?.total}
                  </span>
                </p>
                <p className="grid grid-cols-3 uppercase text-dark-100">
                  Stripe Payment :{" "}
                  <span className="text-dark-500 dark:text-light-100">
                    ${paymentInfo?.total}
                  </span>
                </p>
                <p className="grid grid-cols-3 uppercase text-dark-100">
                  Amount Due :{" "}
                  <span className="text-dark-500 dark:text-light-100">$00</span>
                </p>
              </div>
            </div>
          </div>

          {/* product */}
          <div className="border rounded dark:border-dark-300 border-light-500">
            <div className="grid grid-cols-2 px-6 py-4 text-sm border-b rounded dark:border-dark-300 border-light-500 dark:bg-dark-300 bg-light-300 text-dark-500 dark:text-light-100">
              <p>Item</p>
              <p>Quantity</p>
            </div>

            <div className="flex flex-col justify-between gap-4 px-6 py-4 lg:flex-row lg:items-center">
              <div className="flex gap-4">
                <img
                  src={data?.images[0] || "/assets/images/card_alt.png"}
                  alt="alt"
                  className="md:w-[150px] w-[120px]"
                />

                <div className="space-y-2">
                  <p className="text-xs text-dark-100 whitespace-nowrap">
                    Purchased on {data?.createdAt?.slice(0, 10)}
                  </p>
                  <p className="text-sm font-medium cursor-pointer dark:text-light-100 text-dark-500 hover:text-primary line-clamp-2">
                    {data?.name}
                  </p>
                  <Link
                    href={`/products/${data?._id}`}
                    className="text-sm cursor-pointer text-primary"
                  >
                    Preview
                  </Link>
                </div>
              </div>

              <div className="flex self-end gap-4">
                <Link
                  href={`/products/${data?._id}`}
                  className="p-2 text-xs transition-all bg-transparent border rounded-sm text-primary border-light-500 dark:border-dark-300 dark:hover:bg-dark-200 hover:bg-light-300 active:scale-95"
                >
                  Update Preview
                </Link>
                <Link
                  href={`/products/${data?._id}`}
                  className="flex items-center gap-2 p-2 text-xs transition-all rounded-sm text-light-100 bg-primary hover:bg-primarySec active:scale-95"
                >
                  <BiSolidDownload className="w-4 h-4" />
                  Download
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchaseDetails;
