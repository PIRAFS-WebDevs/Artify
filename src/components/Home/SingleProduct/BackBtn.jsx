import Link from "next/link";
import React from "react";

const BackBtn = () => {
  return (
    <>
      <Link href={"/"}>
        <button className="dark:text-dark-100 font-medium hover:dark:text-white">
          Back
        </button>
      </Link>
    </>
  );
};

export default BackBtn;
