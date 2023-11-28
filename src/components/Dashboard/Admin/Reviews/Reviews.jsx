"use client";
import SharedComp from "@/components/Shared/admin/SharedComp";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import AllStateContext from "@/context/AllStateContext";
import { useContext, useState } from "react";
import DelItemsModal from "@/components/Shared/admin/components/DelItemsModal";

const Reviews = () => {
  // const [isDelOpen, setDelOpen] = useState(false);

  const { setIsShow, isShow, isDelOpen, setDelOpen } =
    useContext(AllStateContext);
  return (
    <div className="relative">
      <SharedComp type={"Reviews"} />
      <div className="w-auto p-5 mt-5 mb-5 overflow-x-auto border rounded-sm dark:bg-dark-400 text-start dark:border-dark-300 scrollbar">
        <table className="w-full">
          <thead>
            <tr className="w-auto h-12 text-xs border rounded-sm dark:bg-dark-200 border-dark-300 md:text-base text-start">
              <th>Image</th>
              <th className="text-start">Customer Review</th>
              <th className="text-start">Ratings</th>
              <th>Products</th>
              <th>Reports</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            <tr className="h-20 text-xs md:text-base text-start">
              <td className="w-[110px]">
                <div className="w-20 h-12 ">
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
                  <p>Is it gutenberg based or elementor based?</p>
                </div>
              </td>
              <td>
                <p className="">Customer</p>
              </td>

              <td>
                <p className="">ChawkBazar Laravel Flutter Mobile App</p>
              </td>
              <td>
                <p className="">feedback</p>
              </td>
              <td>
                <p className="">dates</p>
              </td>
              <td>
                <div className="flex items-center justify-center gap-1 p-3 md:gap-5">
                  <RiDeleteBin6Line
                    onClick={() => setDelOpen(true)}
                    className="text-red-400 cursor-pointer"
                  />
                  {/*  <FaRegEdit
                    onClick={() => setIsShow(true)}
                    className="text-green-500 cursor-pointer"
                  /> */}
                </div>

                <>
                  <DelItemsModal
                    isDelOpen={isDelOpen}
                    setDelOpen={setDelOpen}
                  />
                </>
                {/* qustion modul */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reviews;
