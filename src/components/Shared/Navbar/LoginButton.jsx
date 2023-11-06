"use client";

import Login from "@/components/Login/Login";
import { useState } from "react";

const LoginButton = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsShow(true)}
        className="hidden px-8 py-2 text-white transition-all rounded-md bg-primary md:block hover:bg-primarySec"
      >
        Login
      </button>

      {/* modal */}
      <Login isShow={isShow} setIsShow={setIsShow} />
    </>
  );
};

export default LoginButton;
