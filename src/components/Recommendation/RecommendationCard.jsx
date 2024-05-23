"use client";

import { useGetRecommended } from "@/hooks/useRecommended";
import { Skeleton } from "@nextui-org/react";
import { AiOutlineComment, AiOutlineStar } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

const RecommendationCard = () => {
  const { data = [], isLoading } = useGetRecommended();

  if (isLoading) {
    return Array.from({ length: 4 }).map((_, i) => (
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
    ));
  }

  return (
    <div className="space-y-4">
      {data.map((e) => (
        <div className="flex flex-col justify-between gap-2 p-4 border rounded-sm md:p-6 sm:flex-row dark:border-dark-300 border-dark-100">
          <div className="flex items-center gap-4">
            <BiUserCircle size={"2rem"} />
            <div className="space-y-1">
              <p className="text-xs text-dark-100">
                {e?.name} {e?.createdAt?.slice(0, 10)}
              </p>
              <p className="text-dark-100">{e?.subject}</p>
              <p>{e?.details}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-dark-100 max-sm:ml-12">
            <p className="flex items-center gap-2">
              <AiOutlineComment />
              <span>0</span>
            </p>
            <p className="flex items-center gap-2">
              <AiOutlineStar />
              <span>0</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendationCard;
