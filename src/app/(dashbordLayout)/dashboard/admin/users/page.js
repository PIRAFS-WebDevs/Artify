import Users from "@/components/Dashboard/Admin/Users/Users";
import { getUser } from "@/utils/api/user";
import React from "react";

const usersPage = async () => {
  const user = await getUser();
  return (
    <>
      <Users user={user.data.data} />
    </>
  );
};

export default usersPage;
