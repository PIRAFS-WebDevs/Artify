"use client";
import SharedComp from "@/components/Shared/admin/SharedComp";
import DelItemsModal from "@/components/Shared/admin/components/DelItemsModal";
import AllStateContext from "@/context/AllStateContext";
import { GoBlocked } from "react-icons/go";
import React, { useContext, useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import SetUserRole from "./SetUserRole";
import BlockUser from "./BlockUser";
import { getUser } from "@/utils/api/user";

const Users = () => {
  const { isDelOpen, setDelOpen } = useContext(AllStateContext);
  const [searchText, SetSearchText] = useState("");
  const [userModals, setUserModals] = useState({});
  const [blockModal, setBlockModal] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const allUser = await getUser(searchText);
      setUsers(allUser?.user);
    })();
  }, [searchText]);

  const toggleUserModal = (userId) => {
    setUserModals((prevModals) => ({
      ...prevModals,
      [userId]: !prevModals[userId],
    }));
  };

  return (
    <div className="relative">
      <SharedComp type={"Customers"} search SetSearchText={SetSearchText} />
      <div className="w-auto p-5 mt-5 mb-5 overflow-x-auto border rounded-sm dark:bg-dark-400 dark:border-dark-300 scrollbar">
        <table className="w-full text-center">
          <thead>
            <tr className="w-auto h-12 text-xs border rounded-sm dark:bg-dark-200 border-dark-300 md:text-base ">
              <th>Avatar</th>
              <th className="">Name</th>
              <th className="">Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            {users?.map((user, i) => (
              <tr key={i} className="h-20 text-xs md:text-base text-center">
                <td className="flex justify-center items-center h-20">
                  {!user?.imgURL ? (
                    <div className="flex w-12 h-12 rounded-full justify-center items-center bg-primary text-2xl ">
                      {user?.name[0]}
                    </div>
                  ) : (
                    <img
                      src={user?.imgURL}
                      alt={user?.name + "Profile Image"}
                      className="object-cover w-12 h-12 rounded-full "
                    />
                  )}
                </td>

                <td>
                  <div>
                    <p>{user?.name}</p>
                  </div>
                </td>
                <td>
                  <p>{user?.email}</p>
                </td>

                <td>
                  <p className="">{user?.role}</p>
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
                      onClick={() => toggleUserModal(user._id)}
                      className="text-green-500 cursor-pointer"
                    />
                    <GoBlocked
                      onClick={() => setBlockModal(true)}
                      className="cursor-pointer text-sky-400"
                    />
                  </div>
                  <>
                    {userModals[user._id] && (
                      <SetUserRole
                        isShow={userModals[user._id]}
                        setIsShow={() => toggleUserModal(user._id)}
                        _id={user?._id}
                        preRole={user?.role}
                      />
                    )}
                    <DelItemsModal
                      isDelOpen={isDelOpen}
                      setDelOpen={setDelOpen}
                      path={`/admin/user/delete-user/${user?._id}`}
                      title={"User"}
                    />
                    <BlockUser
                      blockModal={blockModal}
                      setBlockModal={setBlockModal}
                    />
                  </>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
