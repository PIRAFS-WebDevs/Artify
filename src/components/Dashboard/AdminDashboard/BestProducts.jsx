import React from "react";

const BestProducts = () => {
  return (
    <div className="p-5 mb-5 overflow-x-auto text-center bg-white border rounded-sm  dark:bg-dark-400 dark:border-dark-300">
      <p className="mb-5 text-center">Popular Products</p>

      <table className="w-full text-xs md:text-base ">
        <thead>
          <tr className="h-12 text-xs border rounded-sm dark:bg-dark-200 border-dark-300 md:text-base ">
            <th>id</th>
            <th className="text-start">Name</th>

            <th>Layouts</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="h-12 text-xs  md:text-base">
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
