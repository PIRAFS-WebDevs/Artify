"use client";

import { Tab, Tabs } from "@nextui-org/react";
import { AiOutlineSearch } from "react-icons/ai";

const MarketplaceHeader = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
      <div className="flex items-center gap-2 pb-2 border-b w-60 border-dark-200 focus:border-dark-100">
        <AiOutlineSearch className="text-dark-100" />
        <input
          type="text"
          placeholder="Search by name..."
          className="w-full bg-transparent outline-none text-dark-100 placeholder:text-dark-100 placeholder:text-sm"
        />
      </div>
      <div className="flex flex-wrap gap-4">
        <Tabs aria-label="TabsColors" radius="full" color="default">
          <Tab key="photos" title="Photos" />
          <Tab key="music" title="Music" />
          <Tab key="videos" title="Videos" />
        </Tabs>
      </div>
    </div>
  );
};

export default MarketplaceHeader;
