import React from "react";

const Title = ({ title, subTitle }) => {
  return (
    <div className="text-center mb-10">
      <h4 className="text-2xl font-semibold dark:text-white ">{title}</h4>
      <p className="dark:text-dark-100">{subTitle}</p>
    </div>
  );
};

export default Title;
