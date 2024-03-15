import { AiOutlineSearch } from "react-icons/ai";

const ArticleSearch = () => {
  return (
    <div className="relative grid px-4 py-6 border-b place-items-center dark:border-dark-300 border-light-300">
      <label htmlFor="Search" className="sr-only">
        Search
      </label>

      <div className="relative grid w-full md:w-2/3 place-items-center">
        <input
          type="text"
          id="Search"
          placeholder="Have a question? Ask or enter a search term."
          className="w-full px-4 py-2 font-light transition duration-100 bg-light-100 border rounded-full outline-none dark:bg-transparent dark:border-dark-200 border-light-400 focus:border-primary dark:text-light-100 text-dark-500 pe-24 placeholder:text-sm md:text-lg"
        />

        <div className="absolute inset-y-0 grid w-20 end-2 place-content-center">
          <button className="flex items-center px-3 py-2 text-xs text-light-100 transition-all duration-200 rounded-full bg-primary dark:hover:bg-primarySec active:scale-95 ">
            <AiOutlineSearch />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleSearch;
