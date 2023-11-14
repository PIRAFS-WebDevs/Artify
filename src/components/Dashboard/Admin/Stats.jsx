import React from "react";
import StatsCard from "./StatsCard";

const Stats = () => {
  return (
    <section className=" grid lg:grid-cols-4 grid-cols-2 gap-5">
      {[1, 2, 3, 4].map((x, i) => (
        <StatsCard
          key={i}
          title={"Total Revenue"}
          days={"Last 30 Days"}
          income={110}
        />
      ))}
    </section>
  );
};

export default Stats;
