const Category = () => {
  return (
    <section>
      <div className="app-category-filter-bar sticky top-16 z-20 flex min-h-[64px] w-full overflow-hidden border-b border-gray-700 bg-light-100 px-4 py-4 dark:border-dark-300 dark:bg-dark-100 sm:top-[70px] sm:min-h-[70px] sm:px-5 sm:py-5 md:px-6 lg:px-7 3xl:px-8 text-white">
        <div className="-mb-4 flex items-start overflow-hidden">
          <div className="-mb-7 flex w-full gap-3 overflow-x-auto scroll-smooth pb-7">
            <button className="h-[30px] shrink-0 !rounded-full border border-gray-700 py-1.5 px-3.5 text-xs font-medium outline-none bg-white text-black">
              All
            </button>
            <button className="h-[30px] shrink-0 !rounded-full border border-gray-700 py-1.5 px-3.5 text-xs font-medium outline-none bg-[#323232]">
              Free
            </button>
            <button className="h-[30px] shrink-0 !rounded-full border border-gray-700 py-1.5 px-3.5 text-xs font-medium outline-none bg-[#323232]">
              PHP Script
            </button>
            <button className="h-[30px] shrink-0 !rounded-full border border-gray-700 py-1.5 px-3.5 text-xs font-medium outline-none bg-[#323232]">
              HTML
            </button>
            <button className="h-[30px] shrink-0 !rounded-full border border-gray-700 py-1.5 px-3.5 text-xs font-medium outline-none bg-[#323232]">
              React
            </button>
            <button className="h-[30px] shrink-0 !rounded-full border border-gray-700 py-1.5 px-3.5 text-xs font-medium outline-none bg-[#323232]">
              WordPress Plugin
            </button>
            <button className="h-[30px] shrink-0 !rounded-full border border-gray-700 py-1.5 px-3.5 text-xs font-medium outline-none bg-[#323232]">
              WordPress Theme
            </button>
            <button className="h-[30px] shrink-0 !rounded-full border border-gray-700 py-1.5 px-3.5 text-xs font-medium outline-none bg-[#323232]">
              Angular
            </button>
            <button className="h-[30px] shrink-0 !rounded-full border border-gray-700 py-1.5 px-3.5 text-xs font-medium outline-none bg-[#323232]">
              CMS
            </button>
            <button className="h-[30px] shrink-0 !rounded-full border border-gray-700 py-1.5 px-3.5 text-xs font-medium outline-none bg-[#323232]">
              CMS
            </button>
            <button className="h-[30px] shrink-0 !rounded-full border border-gray-700 py-1.5 px-3.5 text-xs font-medium outline-none bg-[#323232]">
              CMS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
