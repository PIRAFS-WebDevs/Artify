import React from 'react';
import footerdata from '@/data/footerData';

const HomeFooter = () => {
    return (
        <div className='grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-5 gap-10 '>
            <div className='col-span-1'>

            </div>

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