"use client";
import SharedComp from "@/components/Shared/admin/SharedComp";
import DelItemsModal from "@/components/Shared/admin/components/DelItemsModal";
import AllStateContext from "@/context/AllStateContext";
import { GoBlocked } from "react-icons/go";
import React, { useContext } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import SetUserRole from "./SetUserRole";

const Users = () => {
  const { setIsShow, isShow, isDelOpen, setDelOpen } =
    useContext(AllStateContext);
  return (
    <div className="relative">
      <SharedComp type={"Customers"} search />
      <div className="w-auto p-5 mt-5 mb-5 overflow-x-auto border rounded dark:bg-dark-400 dark:border-dark-300 scrollbar">
        <table className="w-full text-center">
          <thead>
            <tr className="w-auto h-12 text-xs border rounded dark:bg-dark-200 border-dark-300 md:text-base ">
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
            <tr className="h-20 text-xs md:text-base">
              <td>
                <div className="flex w-12 h-12 rounded-full bg-primary "></div>
              </td>

              <td>
                <div>
                  <p>Is it gutenberg based or elementor based?</p>
                </div>
              </td>
              <td>
                <p className="">SAgor@gmailcom</p>
              </td>

              <td>
                <p className="">Admin</p>
              </td>
              <td>
                <p className="">Active</p>
              </td>

              <td>
                <div className="flex items-center justify-center gap-1 p-3 md:gap-5">
                  <RiDeleteBin6Line
                    onClick={() => setDelOpen(true)}
                    className="text-red-400 cursor-pointer"
                  />
                  <FaRegEdit
                    onClick={() => setIsShow(true)}
                    className="text-green-500 cursor-pointer"
                  />
                  <GoBlocked
                    onClick={() => setDelOpen(true)}
                    className="cursor-pointer text-sky-400"
                  />
                </div>
                <>
                  <SetUserRole isShow={isShow} setIsShow={setIsShow} />
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
    </div>
  );
};

export default Users;
