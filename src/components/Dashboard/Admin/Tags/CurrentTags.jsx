"use client";
import SharedComp from "@/components/Shared/admin/SharedComp";
import DelItemsModal from "@/components/Shared/admin/components/DelItemsModal";
import AllStateContext from "@/context/AllStateContext";
import React, { useContext } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const CurrentTags = () => {
  const { setIsShow, isShow, isDelOpen, setDelOpen } =
    useContext(AllStateContext);
  return (
    <>
      <div>
        <SharedComp
          type={"Tags"}
          AddType={"Add Tags"}
          link={"/dashboard/admin/tags/upload"}
        />
        <div className="p-5 mt-5 mb-5 text-center border rounded-sm dark:bg-dark-400 dark:border-dark-300">
          <table className="w-full ">
            <thead>
              <tr className="h-12 text-xs border rounded-sm dark:bg-dark-200 border-dark-300 md:text-base text-start">
                <th>id</th>
                <th className="text-start">Name</th>
                <th className="text-start">Icon</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="h-12 text-xs md:text-base text-start">
                <td>1</td>

                <td>
                  <p className="line-clamp-1">
                    Shoppie UI Kit PSD Ecommerce Design Template
                  </p>
                </td>
                <td>
                  <p>icon</p>
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
      </div>
    </>
  );
};

export default CurrentTags;
