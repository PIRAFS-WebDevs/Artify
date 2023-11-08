import React from "react";
import Card from "./Card/Card";
import ProductDetails from "../ProductModal/ProductDetails";

const Content = () => {
  return (
    <section className="px-4 pb-4">
      <Card />
      <ProductDetails/>
    </section>
  );
};

export default Content;
