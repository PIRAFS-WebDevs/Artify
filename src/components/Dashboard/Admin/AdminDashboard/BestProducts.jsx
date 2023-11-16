import React from "react";

const BestProducts = () => {
  return (
    <div className=" dark:bg-dark-400 p-5 mb-5 rounded border text-center dark:border-dark-300  ">
      <p className="text-center mb-5">Popular Products</p>

      <table className="w-full text-xs md:text-base ">
        <thead>
          <tr className="h-12 dark:bg-dark-200 rounded border-dark-300 border text-xs md:text-base ">
            <th>id</th>
            <th className="text-start">Name</th>

            <th>Layouts</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className=" text-xs md:text-base  h-12">
            <td>1</td>

            <td>
              <p className="line-clamp-1 text-start">
                Shoppie UI Kit PSD Ecommerce Design Template
              </p>
            </td>
            <td>Fixed</td>
            <td>$7.99</td>
            <th>500</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BestProducts;
