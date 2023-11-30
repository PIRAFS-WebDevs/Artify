import React from "react";
import { licensingData } from "@/data/licensingData";

const Licensing = () => {
  return (
    <div className="space-y-10">
      {licensingData.map((data) => (
        <div key={data?.title} className="space-y-5">
          <p className="dark:text-white">{data?.title}</p>
          <p>{data?.details}</p>

          <ul className="ml-10 space-y-2 list-decimal">
            {data?.points?.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Licensing;
