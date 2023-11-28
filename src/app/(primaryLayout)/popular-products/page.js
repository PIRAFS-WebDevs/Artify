"use client";

import Card from "@/components/Home/Card/Card";
import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";

const PopularProducts = () => {
  return (
    <>
      <div className="flex items-center justify-between px-6 pt-6">
        <p className="text-sm dark:text-dark-100">Total 10 products found</p>
        {/* <div className="flex gap-1 p-2 text-sm font-medium bg-white rounded-full dark:bg-dark-400">
          <button className="px-2 py-1 rounded-full dark:text-white focus:text-dark-500 dark:focus:bg-white focus:bg-light-500 ">
            Weekly
          </button>
          <button className="px-2 py-1 rounded-full dark:text-white focus:text-dark-500 dark:focus:bg-white focus:bg-light-500 ">
            Monthly
          </button>
          <button className="px-2 py-1 rounded-full dark:text-white focus:text-dark-500 dark:focus:bg-white focus:bg-light-500 ">
            Yearly
          </button>
        </div> */}
        <div className="flex flex-wrap gap-4">
          <Tabs aria-label="TabsColors" radius="full" color="default">
            <Tab key="photos" title="Photos" />
            <Tab key="music" title="Music" />
            <Tab key="videos" title="Videos" />
          </Tabs>
        </div>
      </div>

      <Card />
    </>
  );
};

export default PopularProducts;
