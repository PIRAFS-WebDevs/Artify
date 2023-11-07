"use client";

import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const CloseButton = ({ setIsShow, reset }) => {
  const clickFunction = () => {
    setIsShow(false);
    reset();
  };

  return (
    <button
      onClick={clickFunction}
      className="grid w-8 h-8 -mt-2 -mr-2 text-xl place-items-center"
    >
      <AiOutlineClose />
    </button>
  );
};

export default CloseButton;
