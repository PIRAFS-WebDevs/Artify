import React from "react";

const RecentActivity = () => {
  return (
    <div
      className="lg:flex gap-5  mb-5 space-y-5 lg:space-y-0
     "
    >
      <div className="lg:w-1/2 dark:bg-dark-400 p-5 overflow-x-auto rounded border dark:border-dark-300 ">
        <p className="text-center mb-5">Recent Orders</p>

        <div>
          <table className="w-full text-center ">
            <thead>
              <tr className="h-12 dark:bg-dark-200 rounded border-dark-300 border text-xs md:text-base">
                <th>Tracking Number</th>
                <th>Total</th>
                <th>Order</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="text-center text-xs md:text-base">
              <tr>
                <td>hasj</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
                <td>1961</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="lg:w-1/2 dark:bg-dark-400 overflow-x-auto p-5 rounded border dark:border-dark-300 ">
        <p className="text-center mb-5">Recent Withdrawals</p>

        <div>
          <table className="w-full text-center">
            <thead>
              <tr className="h-12 dark:bg-dark-200 rounded border-dark-300 border text-xs md:text-base">
                <th>Tracking Number</th>
                <th>Total</th>
                <th>Order</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="text-center text-xs md:text-base">
              <tr>
                <td>hasj</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
                <td>1961</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
