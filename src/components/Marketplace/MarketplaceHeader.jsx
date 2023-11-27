import { AiOutlineSearch } from "react-icons/ai";

const MarketplaceHeader = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
      <div className="flex items-center gap-2 pb-2 border-b w-60 border-dark-200 focus:border-dark-100">
        <AiOutlineSearch className="text-dark-100" />
        <input
          type="text"
          placeholder="Search by name..."
          className="w-full bg-transparent outline-none text-dark-100 placeholder:text-dark-100 placeholder:text-sm"
        />
      </div>
      <div className="flex gap-1 p-2 rounded-full bg-dark-400">
        <button className="px-3 py-1 text-sm text-white rounded-full focus:text-dark-500 focus:bg-white">
          Weekly
        </button>
        <button className="px-3 py-1 text-sm text-white rounded-full focus:text-dark-500 focus:bg-white">
          Monthly
        </button>
        <button className="px-3 py-1 text-sm text-white rounded-full focus:text-dark-500 focus:bg-white">
          Yearly
        </button>
      </div>
    </div>
  );
};

export default MarketplaceHeader;
