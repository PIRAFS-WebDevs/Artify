import SharedComp from "@/components/Shared/admin/SharedComp";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Questions = () => {
  return (
    <>
      <SharedComp type={"Questions"} />

      {/*  */}
      <div className=" dark:bg-dark-400 p-5 mb-5 rounded border text-start dark:border-dark-300 mt-5 w-auto overflow-x-auto scrollbar">
        <table className="w-full">
          <thead>
            <tr className="h-12 dark:bg-dark-200 w-auto rounded border-dark-300 border text-xs md:text-base text-start">
              <th>Image</th>
              <th className="text-start">Question & Answer</th>
              <th className="text-start">Customer Name</th>
              <th>Products</th>
              <th>Reports</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            <tr className=" text-xs md:text-base text-start h-20   ">
              <td className="w-[110px]">
                <div className="h-12 w-20 ">
                  <Image
                    className="rounded"
                    src={"/assets/images/branner/productsBanner2.jpg"}
                    width={1500}
                    height={100}
                    alt="banner"
                  />
                </div>
              </td>

              <td>
                <div className="w-[300px] ">
                  <p>
                    Q: <spna>Is it gutenberg based or elementor based?</spna>
                  </p>
                  <p>
                    A: <spna>It is gutenberg based.</spna>
                  </p>
                </div>
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
                <div className="flex  p-3 justify-center items-center gap-1 md:gap-5">
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
