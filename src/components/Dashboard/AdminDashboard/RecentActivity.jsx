const RecentActivity = () => {
  return (
    <div className="gap-5 mb-5 space-y-5 lg:flex lg:space-y-0 ">
      <div className="p-5 overflow-x-auto bg-light-100 border rounded-sm lg:w-1/2 dark:bg-dark-400 dark:border-dark-300 ">
        <p className="mb-5 text-center">Recent Orders</p>

        <div>
          <table className="w-full text-center ">
            <thead>
              <tr className="h-12 text-xs border rounded-sm dark:bg-dark-200 border-dark-300 md:text-base">
                <th>Tracking Number</th>
                <th>Total</th>
                <th>Order</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="text-xs text-center md:text-base">
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
      <div className="p-5 overflow-x-auto bg-light-100 border rounded-sm lg:w-1/2 dark:bg-dark-400 dark:border-dark-300 ">
        <p className="mb-5 text-center">Recent Withdrawals</p>

        <div>
          <table className="w-full text-center">
            <thead>
              <tr className="h-12 text-xs border rounded-sm dark:bg-dark-200 border-dark-300 md:text-base">
                <th>Tracking Number</th>
                <th>Total</th>
                <th>Order</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="text-xs text-center md:text-base">
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
