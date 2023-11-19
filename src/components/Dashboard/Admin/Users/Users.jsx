import SharedComp from "@/components/Shared/admin/SharedComp";
import Image from "next/image";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Users = () => {
  return (
    <>
      <SharedComp type={"Customers"} search />
      <div className=" dark:bg-dark-400 p-5 mb-5 rounded border dark:border-dark-300 mt-5 w-auto overflow-x-auto scrollbar">
        <table className="w-full text-center">
          <thead>
            <tr className="h-12 dark:bg-dark-200 w-auto rounded border-dark-300 border text-xs md:text-base ">
              <th>Avatar</th>
              <th className="">Name</th>
              <th className="">Email</th>
              <th>Permissions</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            <tr className=" text-xs md:text-base h-20   ">
              <td>
                <div className="h-12 w-12 rounded-full flex bg-primary "></div>
              </td>

              <td>
                <div>
                  <p>Is it gutenberg based or elementor based?</p>
                </div>
              </td>
              <td>
                <p className=" ">SAgor@gmailcom</p>
              </td>

              <td>
                <p className=" ">Admin</p>
              </td>
              <td>
                <p className=" ">Active</p>
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

export default Users;
