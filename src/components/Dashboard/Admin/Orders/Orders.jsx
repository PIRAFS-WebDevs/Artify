import SharedComp from "@/components/Shared/admin/SharedComp";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Orders = () => {
  return (
    <>
      {" "}
      <SharedComp type={"Orders"} search />
      <div className=" dark:bg-dark-400 p-5 mb-5 rounded border dark:border-dark-300 mt-5 w-auto scrollbar  overflow-x-auto">
        <table className="w-full text-center">
          <thead>
            <tr className="h-12 dark:bg-dark-200 w-auto rounded border-dark-300 border text-xs md:text-base ">
              <th>Tracking Number </th>
              <th className="">Price</th>
              <th className="">Fee</th>
              <th className="">Total</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            <tr className=" text-xs md:text-base h-20   ">
              <td>
                <p>Aqcy125485mts3</p>
              </td>

              <td>
                <div>
                  <p>$110</p>
                </div>
              </td>
              <td>
                <div>
                  <p>$10</p>
                </div>
              </td>
              <td>
                <p className=" ">$110</p>
              </td>

              <td>
                <p className=" ">1/12/2023</p>
              </td>
              <td>
                <p className=" ">Delivered</p>
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

export default Orders;
