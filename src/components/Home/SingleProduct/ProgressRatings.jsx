import { AiFillStar } from "react-icons/ai";

const ProgressRatings = () => {
  const dynamicWidth = "20%";
  return (
    <div className="flex items-center w-full h-full dark:dark:text-light-100 ">
      <div className="w-full space-y-5 md:ml-8">
        <div className="flex items-center gap-3 ">
          <p className={"flex items-center gap-2 justify-center"}>
            5 <AiFillStar className="text-dark-100 dark:text-light-100" />
          </p>
          <div className="w-[40%] h-1 relative bg-dark-100 rounded-3xl">
            <p
              style={{
                width: dynamicWidth,
              }}
              className="absolute top-0 h-1 w-7 bg-primary rounded-3xl"
            ></p>
          </div>
          <p>0</p>
        </div>
        {/* 1 */}
        <div className="flex items-center gap-3">
          <p className={"flex items-center gap-2 justify-center"}>
            4 <AiFillStar className="text-dark-100 dark:text-light-100" />
          </p>
          <div className="w-[40%] h-1 relative bg-dark-100 rounded-3xl">
            <p
              style={{
                width: dynamicWidth,
              }}
              className="absolute top-0 h-1 w-7 bg-primary rounded-3xl"
            ></p>
          </div>
          <p>0</p>
        </div>
        {/* 2 */}
        <div className="flex items-center gap-3">
          <p className={"flex items-center gap-2 justify-center"}>
            3 <AiFillStar className="text-dark-100 dark:text-light-100" />
          </p>
          <div className="w-[40%] h-1 relative bg-dark-100 rounded-3xl">
            <p
              style={{
                width: dynamicWidth,
              }}
              className="absolute top-0 h-1 w-7 bg-primary rounded-3xl"
            ></p>
          </div>
          <p>0</p>
        </div>
        {/* 3 */}
        <div className="flex items-center gap-3">
          <p className={"flex items-center gap-2 justify-center"}>
            2 <AiFillStar className="text-dark-100 dark:text-light-100" />
          </p>
          <div className="w-[40%] h-1 relative bg-dark-100 rounded-3xl">
            <p
              style={{
                width: dynamicWidth,
              }}
              className="absolute top-0 h-1 w-7 bg-primary rounded-3xl"
            ></p>
          </div>
          <p>0</p>
        </div>
        {/* 4 */}
        <div className="flex items-center gap-3">
          <p className={"flex items-center gap-2 justify-center"}>
            1 <AiFillStar className="text-dark-100 dark:text-light-100" />
          </p>
          <div className="w-[40%] h-1 relative bg-dark-100 rounded-3xl">
            <p
              style={{
                width: dynamicWidth,
              }}
              className="absolute top-0 h-1 w-7 bg-primary rounded-3xl"
            ></p>
          </div>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressRatings;
