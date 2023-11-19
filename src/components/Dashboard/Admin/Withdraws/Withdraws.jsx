import SharedComp from "@/components/Shared/admin/SharedComp";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Withdraws = () => {
  return (
    <>
      <SharedComp type={"Withdrawals"} />
      <div className="w-auto p-5 mt-5 mb-5 overflow-x-auto border rounded  dark:bg-dark-400 text-start dark:border-dark-300 scrollbar">
        <table className="w-full">
          <thead>
            <tr className="w-auto h-12 text-xs border rounded dark:bg-dark-200 border-dark-300 md:text-base text-start">
              <th>Shop Name</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Created</th>
              <th>Date</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          {/* body */}
          <tbody>
            <tr className="h-20 text-xs text-center  md:text-base">
              <td>
                <div>
                  <p>Is it gutenberg based or elementor based?</p>
                </div>
              </td>
              <td>
                <p className="">Customer</p>
              </td>
              <td>
                <p className="">Customer</p>
              </td>
              <td>
                <p className="">ChawkBazar Laravel Flutter Mobile App</p>
              </td>

              <td>
                <p className="">dates</p>
              </td>
              {/* <td>
                <div className="flex items-center justify-center gap-1 p-3 md:gap-5">
                  <RiDeleteBin6Line className="text-red-400" />
                  <FaRegEdit className="text-green-500" />
                </div>
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Withdraws;
