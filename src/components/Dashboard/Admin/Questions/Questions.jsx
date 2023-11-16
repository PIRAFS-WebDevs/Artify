import SharedComp from "@/components/Shared/admin/SharedComp";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Questions = () => {
  return (
    <>
      <SharedComp type={"Questions"} />
      <div className=" dark:bg-dark-400 p-5 mb-5 rounded border text-start dark:border-dark-300 mt-5 ">
        <table className="w-full ">
          <thead>
            <tr className="h-12 dark:bg-dark-200 rounded border-dark-300 border text-xs md:text-base text-start">
              <th>Image</th>
              <th className="text-start">Question & Answer</th>
              <th className="text-start">Customer Name</th>
              <th>Product Name</th>
              <th>Feedbacks</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          {/* body */}
          <tbody className="text-start">
            <tr className=" text-xs md:text-base text-start h-12">
              <td>Image</td>

              <td>
                <p>Shoppie UI Kit PSD Ecommerce Design Template</p>
              </td>
              <td>
                <p>Customer</p>
              </td>

              <td>
                <p>ChawkBazar Laravel Flutter Mobile App</p>
              </td>
              <td>
                <p>feedback</p>
              </td>
              <td>
                <p>dates</p>
              </td>
              <td>
                <div className="flex justify-center items-center gap-1 md:gap-5">
                  <RiDeleteBin6Line />
                  <FaRegEdit />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Questions;
