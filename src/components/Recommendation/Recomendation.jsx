import React from "react";
import RecommendationForm from "./RecommendationForm";
import RecommendationCard from "./RecommendationCard";

const Recommendation = () => {
  return (
    <div className="space-y-6 md:w-[80%] mx-auto">
      <RecommendationForm />
      <RecommendationCard />
    </div>
  );
};

export default Recommendation;
