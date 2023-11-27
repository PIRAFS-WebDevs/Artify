"use client";
import SharedComp from "@/components/Shared/admin/SharedComp";
import DelItemsModal from "@/components/Shared/admin/components/DelItemsModal";
import AllStateContext from "@/context/AllStateContext";
import React, { useContext } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Orders = () => {
  const { setIsShow, isShow, isDelOpen, setDelOpen } =
    useContext(AllStateContext);
  return (
    <>
      {" "}
      <SharedComp type={"Orders"} search />
      <div className="w-auto p-5 mt-5 mb-5 overflow-x-auto border rounded dark:bg-dark-400 dark:border-dark-300 scrollbar">
        <table className="w-full text-center">
          <thead>
            <tr className="w-auto h-12 text-xs border rounded dark:bg-dark-200 border-dark-300 md:text-base ">
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
            <tr className="h-20 text-xs md:text-base">
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
                <p className="">$110</p>
              </td>

              <td>
                <p className="">1/12/2023</p>
              </td>
              <td>
                <p className="">Delivered</p>
              </td>

              <td>
                <div className="flex items-center justify-center gap-1 p-3 md:gap-5">
                  <RiDeleteBin6Line
                    onClick={() => setDelOpen(true)}
                    className="text-red-400 cursor-pointer"
                  />
                  <FaRegEdit className="text-green-500 cursor-pointer" />
                </div>
                <>
                  <DelItemsModal
                    isDelOpen={isDelOpen}
                    setDelOpen={setDelOpen}
                  />
                </>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
