import { AiOutlineSearch } from "react-icons/ai";

const MarketPlace = () => {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
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

      <div className="grid grid-cols-5 place-items-center gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
          <div key={e} className="flex flex-col gap-2 items-center">
            <img
              src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F191%2FGroup-14394.png&w=2048&q=100"
              alt=""
              className="w-[80px] h-[80px] rounded"
            />
            <p className="text-white hover:text-primary text-sm cursor-pointer">
              Imagineco
            </p>
            <p className="text-dark-100 text-sm">7 Products</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketPlace;
