"use client";

import Login from "@/components/Login/Login";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const LoginButton = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <FaUserCircle
        onClick={() => setIsShow(true)}
        size={"1.5rem"}
        className="cursor-pointer"
      />

      {/* modal */}
      <Login isShow={isShow} setIsShow={setIsShow} />
    </>
  );
};

export default LoginButton;
