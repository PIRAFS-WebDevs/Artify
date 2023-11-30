import ApplicationSearch from "@/components/Application/ApplicationSearch";
import ArticleSidebar from "@/components/Application/ArticleSidebar";
import React from "react";

const ApplicationLayout = ({ children }) => {
  return (
    <div>
      <ApplicationSearch />
      <div className="grid w-full p-8 mx-auto md:grid-cols-5">
        <div className="md:col-span-3">{children}</div>
        <ArticleSidebar />
      </div>
    </div>
  );
};

export default ApplicationLayout;
