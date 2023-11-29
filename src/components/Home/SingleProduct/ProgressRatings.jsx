import React from "react";
import { AiFillStar } from "react-icons/ai";

const ProgressRatings = () => {
  const dynamicWidth = "20%";
  return (
    <div className="w-full h-full flex items-center dark:dark:text-white">
      <div className="space-y-5 w-full md:ml-8">
        <div className="flex gap-3 items-center ">
          <p className={"flex items-center gap-2 justify-center"}>
            5 <AiFillStar />
          </p>
          <div className="w-[40%] h-1 relative bg-dark-100 rounded-3xl">
            <p
              style={{
                width: dynamicWidth,
              }}
              className="h-1 absolute top-0 w-7 bg-primary rounded-3xl"
            ></p>
          </div>
          <p>0</p>
        </div>
        {/* 1 */}
        <div className="flex gap-3 items-center">
          <p className={"flex items-center gap-2 justify-center"}>
            4 <AiFillStar />
          </p>
          <div className="w-[40%] h-1 relative bg-dark-100 rounded-3xl">
            <p
              style={{
                width: dynamicWidth,
              }}
              className="h-1 absolute top-0 w-7 bg-primary rounded-3xl"
            ></p>
          </div>
          <p>0</p>
        </div>
        {/* 2 */}
        <div className="flex gap-3 items-center">
          <p className={"flex items-center gap-2 justify-center"}>
            3 <AiFillStar />
          </p>
          <div className="w-[40%] h-1 relative bg-dark-100 rounded-3xl">
            <p
              style={{
                width: dynamicWidth,
              }}
              className="h-1 absolute top-0 w-7 bg-primary rounded-3xl"
            ></p>
          </div>
          <p>0</p>
        </div>
        {/* 3 */}
        <div className="flex gap-3 items-center">
          <p className={"flex items-center gap-2 justify-center"}>
            2 <AiFillStar />
          </p>
          <div className="w-[40%] h-1 relative bg-dark-100 rounded-3xl">
            <p
              style={{
                width: dynamicWidth,
              }}
              className="h-1 absolute top-0 w-7 bg-primary rounded-3xl"
            ></p>
          </div>
          <p>0</p>
        </div>
        {/* 4 */}
        <div className="flex gap-3 items-center">
          <p className={"flex items-center gap-2 justify-center"}>
            1 <AiFillStar />
          </p>
          <div className="w-[40%] h-1 relative bg-dark-100 rounded-3xl">
            <p
              style={{
                width: dynamicWidth,
              }}
              className="h-1 absolute top-0 w-7 bg-primary rounded-3xl"
            ></p>
          </div>
          <p>0</p>
        </div>
        {/* 5 */}
      </div>
    </div>
  );
};

export default ProgressRatings;
