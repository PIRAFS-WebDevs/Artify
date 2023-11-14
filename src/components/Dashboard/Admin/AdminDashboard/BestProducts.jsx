import React from "react";

const BestProducts = () => {
  return (
    <div className=" dark:bg-dark-400 p-5 mb-5 rounded border text-center dark:border-dark-300 ">
      <p className="text-center mb-5">Popular Products</p>

      <table className="w-full ">
        <thead>
          <tr className="h-12 dark:bg-dark-200 rounded border-dark-300 border text-xs md:text-base ">
            <th>id</th>
            <th>Name</th>
            <th>Layouts</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className=" text-xs md:text-base">
            <td>1</td>
            <td className="md:hidden">
              {`Shoppie UI Kit PSD Ecommerce Design Template`.slice(0, 8)}...
            </td>
            <td className="hidden md:block lg:hidden">
              {`Shoppie UI Kit PSD Ecommerce Design Template`.slice(0, 20)}...
            </td>
            <td className="hidden lg:block">{`Shoppie UI Kit PSD Ecommerce Design Template`}</td>
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
