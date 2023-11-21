import api from "@/utils/axios";
// import { useState } from "react";
export const delateItem = async (path) => {
  try {
    const res = await api.delete(path);
    return res;
  } catch (error) {
    console.error(error.message);
    return;
  }
};
// const [userModals, setUserModals] = useState({});
export const toggleUserModal = (userId) => {
  setUserModals((prevModals) => ({
    ...prevModals,
    [userId]: !prevModals[userId],
  }));
};
