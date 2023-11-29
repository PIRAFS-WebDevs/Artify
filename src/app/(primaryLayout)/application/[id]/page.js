import ApplicationDetails from "@/components/Application/ApplicationDetails";
import ApplicationSearch from "@/components/Application/ApplicationSearch";
import ArticleSidebar from "@/components/Application/ArticleSidebar";
import React from "react";

const ApplicationDetailsPage = ({ params }) => {
  return (
    <div>
      <ApplicationSearch />
      <div className="grid w-full p-8 mx-auto md:grid-cols-5">
        <ApplicationDetails />
        <ArticleSidebar />
      </div>
    </div>
  );
};

export default ApplicationDetailsPage;
