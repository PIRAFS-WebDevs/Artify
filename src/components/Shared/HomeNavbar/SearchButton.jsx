"use client";

import SearchModal from "@/components/Home/SearchModal/SearchModal";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchButton = () => {
  const [searchShow, setSearchShow] = useState(false);

  return (
    <>
      <button onClick={() => setSearchShow(true)}>
        <AiOutlineSearch
          size={"1.5rem"}
          className="hidden cursor-pointer md:block hover:text-white"
        />
      </button>

      {/* search modal */}
      <SearchModal setSearchShow={setSearchShow} searchShow={searchShow} />
    </>
  );
};

export default SearchButton;
