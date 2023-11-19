import SharedComp from "@/components/Shared/admin/SharedComp";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Withdraws = () => {
  return (
    <>
      <SharedComp type={"Withdrawals"} />
      <div className=" dark:bg-dark-400 p-5 mb-5 rounded border text-start dark:border-dark-300 mt-5 w-auto overflow-x-auto scrollbar">
        <table className="w-full">
          <thead>
            <tr className="h-12 dark:bg-dark-200 w-auto rounded border-dark-300 border text-xs md:text-base text-start">
              <th>Shop Name</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Created</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            <tr className=" text-xs md:text-base  h-20 text-center ">
              <td>
                <div>
                  <p>Is it gutenberg based or elementor based?</p>
                </div>
              </td>
              <td>
                <p className=" ">Customer</p>
              </td>
              <td>
                <p className=" ">Customer</p>
              </td>
              <td>
                <p className=" ">ChawkBazar Laravel Flutter Mobile App</p>
              </td>

              <td>
                <p className=" ">dates</p>
              </td>
              <td>
                <div className="flex  p-3 justify-center items-center gap-1 md:gap-5">
                  <RiDeleteBin6Line className="text-red-500" />
                  <FaRegEdit className="text-green-500" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Withdraws;
