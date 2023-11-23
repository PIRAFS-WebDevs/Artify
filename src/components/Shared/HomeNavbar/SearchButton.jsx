"use client";

import SearchModal from "@/components/Home/SearchModal/SearchModal";
import AllStateContext from "@/context/AllStateContext";
import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchButton = () => {
  const { setSearchShow } = useContext(AllStateContext);

  return (
    <>
      <button onClick={() => setSearchShow(true)}>
        <AiOutlineSearch
          size={"1.5rem"}
          className="hidden cursor-pointer md:block hover:text-white"
        />
      </button>
    </>
  );
};

export default SearchButton;
