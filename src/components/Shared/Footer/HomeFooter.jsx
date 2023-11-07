import React from 'react';
import footerdata from '@/data/footerData';

const HomeFooter = () => {
    return (
        <div className='p-20 pl-[150px] grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-10 '>

        {footerdata.map((categoryObj, index) => (
          <div key={index} className=" text-white">
            {Object.keys(categoryObj).map((categoryName, categoryIndex) => (
              <div key={categoryName}>
                <h2 className='font-bold pb-3'>{categoryName}</h2>
                <ul>
                  {categoryObj[categoryName].map((subcategory, subIndex) => (
                    <li key={subIndex} className='hover:text-gray-300'>{subcategory.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
};

export default HomeFooter;