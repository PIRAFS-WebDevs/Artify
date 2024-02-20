"use client";

import Card from "@/components/Home/Card/Card";
import { Tab, Tabs } from "@nextui-org/tabs";

const PopularProducts = () => {
  return (
    <>
      <div className="flex items-center justify-between px-6 pt-6">
        <p className="text-sm dark:text-dark-100">Total 10 products found</p>
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
