import { MdOutlineDateRange } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

import { AiOutlineTag } from "react-icons/ai";
import { PiDrop } from "react-icons/pi";

const date = (date) => {
  const dateObject = new Date(date);

  // Extracting the date components
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(dateObject.getDate()).padStart(2, "0");

  // Creating the formatted date string
  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};

const ProductInfo = ({ productById }) => {
  const { tags, layout, createdAt, updatedAt } = productById;

  return (
    <section className="space-y-4">
      <div>
        <div className="flex gap-10 py-2.5">
          <span className="flex items-center gap-5 ">
            <RxUpdate className="w-5 h-5 dark:text-dark-100" /> Last Update:
          </span>
          <span className="font-semibold dark:text-white">
            {date(updatedAt)}
          </span>
        </div>
        <div className="flex gap-14 py-2.5">
          <span className="flex items-center gap-5 ">
            <MdOutlineDateRange className="w-5 h-5 dark:text-dark-100" />
            Published:
          </span>
          <span className="font-semibold dark:text-white">
            {date(createdAt)}
          </span>
        </div>
        <div className="flex gap-20 py-2.5">
          <span className="flex items-center gap-5 ">
            <PiDrop className="w-5 h-5 dark:text-dark-100" />
            Layout:
          </span>
          <span className="font-semibold dark:text-white">{layout}</span>
        </div>
        <div className="flex gap-20  py-2.5">
          <span className="flex items-center w-24 gap-5 ">
            <AiOutlineTag className="w-5 h-5 dark:text-dark-100" /> Tags:
          </span>
          <span className="flex flex-wrap gap-3 font-semibold dark:text-white md:flex-row ">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="flex items-center px-3 py-1 text-xs font-medium border rounded-sm border-dark-400 dark:text-dark-100"
              >
                {tag}
              </span>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
