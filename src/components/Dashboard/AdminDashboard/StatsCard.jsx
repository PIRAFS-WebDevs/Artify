const StatsCard = ({ title, days, income, icon }) => {
  return (
    <div className="flex flex-col justify-between col-span-1 p-5 text-xs border rounded-sm bg-light-100 h-36 dark:border-dark-300 dark:bg-dark-400 md:text-base">
      <div className="flex justify-between ">
        <p>
          {title} <br />
          <span className="text-xs dark:text-dark-100">({days})</span>
        </p>
        <div className="flex items-center justify-center w-8 h-8 text-xl rounded-full bg-primary md:w-14 md:h-14">
          {icon}
        </div>
      </div>
      <div className="text-lg">$ {income}</div>
    </div>
  );
};

export default StatsCard;
