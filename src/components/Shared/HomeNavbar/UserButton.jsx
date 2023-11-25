import React, { useContext } from "react";
import UserDropdown from "./UserDropdown";
import LoginButton from "./LoginButton";
import AuthContext from "@/context/AuthContext";

const UserButton = () => {
  const { user } = useContext(AuthContext);
  return <div>{user ? <UserDropdown /> : <LoginButton />}</div>;
};

export default UserButton;
