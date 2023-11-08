import Link from "next/link";
import React from "react";

const BackBtn = () => {
  return (
    <>
    <Link href={"/"}>
      <button className="dark:text-darkNormal font-medium hover:text-white">Back</button>
      </Link>
    </>
  );
};

export default BackBtn;
