import React from "react";
import { AiOutlineComment, AiOutlineStar } from "react-icons/ai";

const RecommendationCard = () => {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4, 5, 6].map((e) => (
        <div className="flex flex-col justify-between gap-2 p-4 border rounded md:p-6 sm:flex-row border-dark-300">
          <div className="flex items-center gap-4">
            <img
              src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F199%2Fconversions%2FGroup-14403-thumbnail.jpg&w=750&q=100"
              className="w-8 h-8 rounded-full"
              alt=""
            />
            <div>
              <p>Roles and Policy</p>
              <p className="text-dark-100">Last Active, 2 month ago</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-dark-100 max-sm:ml-12">
            <p className="flex items-center gap-2">
              <AiOutlineComment />
              <span>9</span>
            </p>
            <p className="flex items-center gap-2">
              <AiOutlineStar />
              <span>7</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendationCard;
