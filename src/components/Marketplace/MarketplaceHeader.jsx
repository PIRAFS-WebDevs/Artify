import { AiOutlineSearch } from "react-icons/ai";

const MarketplaceHeader = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
      <div className="flex gap-2 items-center border-b pb-2 border-dark-200 focus:border-dark-100">
        <AiOutlineSearch className="text-dark-100" />
        <input
          type="text"
          placeholder="Search by name..."
          className="outline-none bg-transparent text-dark-100 placeholder:text-dark-100 placeholder:text-sm"
        />
      </div>
      <div className="bg-dark-400 rounded-full p-2 flex gap-1">
        <button className="text-white focus:text-dark-500  py-1 px-3 rounded-full focus:bg-white text-sm">
          Weekly
        </button>
        <button className="text-white focus:text-dark-500  py-1 px-3 rounded-full focus:bg-white text-sm">
          Monthly
        </button>
        <button className="text-white focus:text-dark-500  py-1 px-3 rounded-full focus:bg-white text-sm">
          Yearly
        </button>
      </div>
    </div>
  );
};

export default MarketplaceHeader;
