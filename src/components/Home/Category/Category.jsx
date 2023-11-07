"use client";
import categoriesData from "@/data/categoriesData";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import React, { useRef } from "react";
const Category = () => {
  const scrollContainerRef = useRef(null);
  const scrollRight = () => {
    console.log("clickes");
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 100; // Adjust the scroll distance as needed
    }
  };
  const scrollLeft = () => {
    console.log("clickes");
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 100; // Adjust the scroll distance as needed
    }
  };
  return (
    <section className="  py-5  dark:bg-darkPrimary">
      <div className="app-category-filter-bar z-20 flex  w-full overflow-hidden text-white ">
        <div className=" flex items-start overflow-hidden">
          <div
            ref={scrollContainerRef}
            className=" px-3   flex w-full gap-3 overflow-hidden  whitespace-nowrap scroll-smooth relative"
          >
            {categoriesData.map((data, index) => (
              <div key={index}>
                {index === 0 ? (
                  <button className="h-[30px] shrink-0 !rounded-full border border-gray-700 py-1.5  px-3.5 text-xs font-medium outline-none bg-white text-black">
                    {data.name}
                  </button>
                ) : (
                  <button className="h-[30px] shrink-0 !rounded-full border border-gray-700 py-1.5 px-3.5 text-xs font-medium outline-non text-white hover:bg-warmGray-700">
                    {data.name}
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={scrollLeft}
              className=" z-20 top-0  left-0 w-10 h-8 
              fixed"
            >
              <MdKeyboardArrowLeft className="text-2xl text-white" />
            </button>

            <button
              onClick={scrollRight}
              className=" z-20 top-0  -right-3 w-10 h-8 sticky"
            >
              <MdKeyboardArrowRight className="text-2xl text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;

// import React, { useRef } from 'react';

// const YourComponent = ({ categoriesData }) => {
//   const scrollContainerRef = useRef(null);

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollLeft += 100; // Adjust the scroll distance as needed
//     }
//   };

//   return (
//     <div className="app-category-filter-bar sticky top-16 z-20 flex min-h-[64px] w-full overflow-hidden md:px-6 lg:px-5 3xl:px-8 text-white">
//       <div className="-mb-4 flex items-start overflow-hidden">
//         <div
//           className="flex space-x-3 overflow-x-auto scroll-smooth pb-7"
//           ref={scrollContainerRef}
//         >
//           {categoriesData.map((data, index) => (
//             <div key={index}>
//               <button className="h-[30px] shrink-0 !rounded-full border border-gray-700 py-1.5 px-3.5 text-xs font-medium outline-none bg-white text-black">
//                 {data.name}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//       <button onClick={scrollRight}>Right Arrow</button>
//     </div>
//   );
// };

// export default YourComponent;
