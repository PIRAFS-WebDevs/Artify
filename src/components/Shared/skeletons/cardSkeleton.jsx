import { Skeleton } from "@nextui-org/react";

const CardSkeleton = () => {
  return (
    <div className="grid gap-6 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-[2000px]:grid-cols-5 p-6">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
        <div
          key={e}
          className="w-full col-span-1 space-y-2 min-h-fit dark:text-white"
        >
          {/* Loading skeleton for the product image */}
          <Skeleton className="w-full h-40 bg-gray-300"></Skeleton>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              {/* Loading skeleton for the profile image */}
              <Skeleton className="w-8 h-8 bg-gray-300 rounded-full"></Skeleton>

              <div className="space-y-1 text-sm">
                {/* Loading skeleton for the product name */}
                <Skeleton className="h-4 bg-gray-300 w-28"></Skeleton>

                {/* Loading skeleton for the product brand */}
                <Skeleton className="w-20 h-3 bg-gray-300"></Skeleton>
              </div>
            </div>

            <div className="space-y-1">
              {/* Loading skeleton for the price */}
              <Skeleton className="w-12 h-4 bg-gray-300"></Skeleton>

              {/* Loading skeleton for the discounted price */}
              <Skeleton className="w-12 h-4 bg-gray-300"></Skeleton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSkeleton;
