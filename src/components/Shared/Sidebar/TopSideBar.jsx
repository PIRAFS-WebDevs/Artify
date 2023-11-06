import navData from "@/data/SideNavData";
import Link from "next/link";

const TopSideBar = () => {
  return (
    <div>
      {navData.map((data, index) => (
        <div key={index}>
          <Link
            href={data?.path}
            className="w-full py-5 flex xl:pl-6 xl:gap-5 group items-center justify-center xl:justify-normal dark:hover:text-white text-warmGray-300 hover:text-white hover:bg-darkPrimary"
          >
            <span className="text-xl dark:text-darkNormal group-hover:text-white">
              {data?.icon}
            </span>{" "}
            <span className="text-sm hidden xl:inline-block  hover:text-white">
              {data?.title}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TopSideBar;
