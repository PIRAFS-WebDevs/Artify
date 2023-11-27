import Card from "@/components/Home/Card/Card";
import CategorySplide from "@/components/Home/Category/CategorySplide";
import AdBanner from "@/components/Software/AdBanner";
import Software from "@/components/Software/Software";
import React from "react";

const SoftWarePage = () => {
  return (
    <div className="">
      <Software />
      <CategorySplide />
      <AdBanner />
      <Card />
    </div>
  );
};

export default SoftWarePage;
