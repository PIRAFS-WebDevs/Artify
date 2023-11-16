import SharedComp from "@/components/Shared/admin/SharedComp";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Questions = () => {
  return (
    <>
      <SharedComp type={"Questions"} />
      <div className=" dark:bg-dark-400 p-5 mb-5 rounded border text-start dark:border-dark-300 mt-5 w-auto overflow-x-auto">
        <table className="w-auto ">
          <thead>
            <tr className="h-12 dark:bg-dark-200 w-auto rounded border-dark-300 border text-xs md:text-base text-start">
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
              <td className="w-[110px] p-3">
                <div className="h-12 w-20 ">
                  <Image
                    className="rounded"
                    src={"/assets/images/branner/productsBanner2.jpg"}
                    width={150}
                    height={100}
                    alt="banner"
                  />
                </div>
              </td>

              <td>
                <div className="w-[400px] p-3">
                  <p>
                    Q: <spna>Is it gutenberg based or elementor based?</spna>
                  </p>
                  <p>
                    A: <spna>It is gutenberg based.</spna>
                  </p>
                </div>
              </td>
              <td>
                <p className=" p-3">Customer</p>
              </td>

              <td>
                <p className=" p-3">ChawkBazar Laravel Flutter Mobile App</p>
              </td>
              <td>
                <p className=" p-3">feedback</p>
              </td>
              <td>
                <p className=" p-3">dates</p>
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
