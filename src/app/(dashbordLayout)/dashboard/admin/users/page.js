import Users from "@/components/Dashboard/Admin/Users/Users";
import { getUser } from "@/utils/api/user";
import React from "react";

const usersPage = async () => {
  const user = await getUser();
  return (
    <>
      <Users users={user?.data?.data} />
    </>
  );
};

export default usersPage;
