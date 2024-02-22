import { AiOutlinePushpin, AiOutlineTags } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { HiOutlineRefresh } from "react-icons/hi";

const ProductInfo = ({ productById }) => {
  const { tags, layout, createdAt, updatedAt } = productById || {};

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        <p className="flex items-center gap-2 dark:text-dark-100">
          <HiOutlineRefresh className="w-4 h-4" />
          Last Update:
        </p>{" "}
        <p className="font-medium">{updatedAt?.slice(0, 10)}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        <p className="flex items-center gap-2 dark:text-dark-100">
          <BiCalendar className="w-4 h-4" />
          Published:
        </p>{" "}
        <p className="font-medium">{createdAt?.slice(0, 10)}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        <p className="flex items-center gap-2 dark:text-dark-100">
          <AiOutlinePushpin className="w-4 h-4" />
          Layout:
        </p>{" "}
        <p className="font-medium">{layout}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        <p className="flex items-center gap-2 dark:text-dark-100">
          <AiOutlineTags className="w-4 h-4" />
          Tags:
        </p>{" "}
        <div className="flex flex-wrap col-span-1 gap-2 xl:col-span-3">
          {tags?.map((tag, i) => (
            <button
              key={i}
              className="px-2 py-1 text-xs font-medium border rounded-sm dark:text-light-500 dark:border-dark-300 border-light-500 dark:hover:bg-dark-300 hover:bg-light-400"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
