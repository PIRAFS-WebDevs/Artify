"use client";

import { useGetPaymentByEmail } from "@/hooks/payment/useGetPaymentByEmail";
import { Skeleton } from "@nextui-org/react";
import Product from "./Product";

const Purchase = () => {
  const { data: payments = [], isLoading } = useGetPaymentByEmail();
  const products = payments.flatMap((item) => item.products);

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
      ) : payments?.length == 0 ? (
        <div className="flex items-center justify-center w-full h-full py-20">
          <img
            className="w-[10rem]"
            src="/assets/images/not_found/no_data.png"
            alt="no_data"
          />
        </div>
      ) : (
        <div className="flex flex-col divide-y divide-dark-200">
          {products.map((id) => (
            <Product key={id} id={id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Purchase;
