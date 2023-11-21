import Users from "@/components/Dashboard/Admin/Users/Users";
import { getUser } from "@/utils/api/user";
import React from "react";

const usersPage = async () => {
  return (
    <>
      <Users />
    </>
  );
};

export default usersPage;
