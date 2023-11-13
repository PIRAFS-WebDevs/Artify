import React from "react";

const BestProducts = () => {
  return (
    <div>
      <div className=" dark:bg-dark-400 p-5 rounded border dark:border-dark-300 ">
        <p className="text-center mb-5">Popular Products</p>

        <div>
          <table className="w-full text-center">
            <thead>
              <tr className="h-12 dark:bg-dark-200 rounded border-dark-300 border">
                <th>id</th>
                <th>Name</th>
                <th>Layouts</th>
                <th>Shop</th>
                <th>Price/Unit</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody className="text-center space-y-3">
              <tr>
                <td>1</td>
                <td>Shoppie UI Kit PSD Ecommerce Design Template</td>
                <td>Fixed</td>
                <td>Qubitron Solutions</td>
                <td>$7.99</td>
                <td>500</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Shoppie UI Kit PSD Ecommerce Design Template</td>
                <td>Fixed</td>
                <td>Qubitron Solutions</td>
                <td>$7.99</td>
                <td>500</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Shoppie UI Kit PSD Ecommerce Design Template</td>
                <td>Fixed</td>
                <td>Qubitron Solutions</td>
                <td>$7.99</td>
                <td>500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
