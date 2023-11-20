"use client";
import DelItemsModal from "@/components/Shared/admin/components/DelItemsModal";
import Image from "next/image";
import React, { useContext } from "react";
import { FaRegEdit } from "react-icons/fa";
import AnsModal from "../Questions/AnsModal";
import AllStateContext from "@/context/AllStateContext";
import { RiCheckboxIndeterminateLine, RiDeleteBin6Line } from "react-icons/ri";

const ProductsTable = ({ product }) => {
  const { setIsShow, isShow, isDelOpen, setDelOpen } =
    useContext(AllStateContext);
  return (
    <>
      <div className="w-auto p-5 mt-5 mb-5 overflow-x-auto text-center border rounded dark:bg-dark-400 dark:border-dark-300 scrollbar">
        <table className="w-full">
          <thead>
            <tr className="w-auto h-12 text-xs text-center border rounded dark:bg-dark-200 border-dark-300 md:text-base">
              <th>Image</th>
              <th className="pl-2 text-start">Name</th>
              <th className="text-center">Layouts</th>
              <th>Slug</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            {product.map((product) => (
              <tr
                key={product?._id}
                className="h-20 text-xs text-center md:text-base"
              >
                <td className="w-20 h-12 ">
                  <div>
                    <Image
                      className="rounded"
                      src={"/assets/images/branner/productsBanner2.jpg"}
                      width={1500}
                      height={100}
                      alt="banner"
                    />
                  </div>
                </td>

                <td className="pl-2 text-start">
                  <div>
                    <p>{product?.name}</p>
                  </div>
                </td>
                <td>
                  <p>{product?.layout}</p>
                </td>

                <td>
                  <p>{product?.slug}</p>
                </td>
                <td>
                  <p>{product?.price}</p>
                </td>
                <td>
                  <p>
                    {" "}
                    {new Date(product?.createdAt).getUTCDate() +
                      "-" +
                      new Date(product?.createdAt).getUTCMonth() +
                      1 +
                      "-" +
                      new Date(product?.createdAt).getUTCFullYear()}
                  </p>
                </td>
                <td>
                  <p>{product?.status}</p>
                </td>
                <td className="w-12">
                  <div className="flex items-center justify-between gap-1 p-3 md:gap-5">
                    <RiDeleteBin6Line
                      onClick={() => setDelOpen(true)}
                      className="text-red-400 cursor-pointer"
                    />
                    <FaRegEdit
                      onClick={() => setIsShow(true)}
                      className="text-green-500 cursor-pointer"
                    />
                    <RiCheckboxIndeterminateLine className="text-green-500 cursor-pointer" />
                  </div>
                  {/* qustion modul */}
                  <>
                    <AnsModal isShow={isShow} setIsShow={setIsShow} />
                    <DelItemsModal
                      isDelOpen={isDelOpen}
                      setDelOpen={setDelOpen}
                      path={`/admin/product/product-delate/${product?._id}`}
                      _id={product?._id}
                    />
                  </>
                  {/* qustion modul */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductsTable;
