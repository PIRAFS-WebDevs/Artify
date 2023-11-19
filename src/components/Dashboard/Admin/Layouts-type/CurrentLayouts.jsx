import SharedComp from "@/components/Shared/admin/SharedComp";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const CurrentLayouts = () => {
  return (
    <>
      <SharedComp
        type={"Layouts Type"}
        AddType={"Add Layout"}
        search={true}
        link={"/dashboard/admin/layouts-type/create-layout"}
      />
      <div className=" dark:bg-dark-400 p-5 mb-5 rounded border text-center dark:border-dark-300 mt-5 ">
        <table className="w-full ">
          <thead>
            <tr className="h-12 dark:bg-dark-200 rounded border-dark-300 border text-xs md:text-base text-start">
              <th>id</th>
              <th className="text-start">Name</th>
              <th className="text-start">Icon</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className=" text-xs md:text-base text-start h-12">
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
                <div className="flex justify-center items-center gap-1 md:gap-5">
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

export default CurrentLayouts;
