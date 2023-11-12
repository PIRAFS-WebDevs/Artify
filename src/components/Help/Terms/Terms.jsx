import React from "react";
import { termsData } from "@/data/termsData";

const Terms = () => {
  return (
    <div className="space-y-10">
      {termsData?.map((data) => (
        <div key={data?.title} className="space-y-5">
          <p className="dark:text-white">{data?.title}</p>
          <p>{data?.details}</p>

          <ul className="list-decimal space-y-2 ml-10">
            {data?.points?.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Terms;
