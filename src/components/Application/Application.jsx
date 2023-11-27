import React from "react";
import ApplicationSearch from "./ApplicationSearch";
import ArticlesCategory from "./ArticleCategory";
import ArticleSidebar from "./ArticleSidebar";

const Application = () => {
  return (
    <div>
      <ApplicationSearch />
      <div className="grid w-full p-6 mx-auto md:w-3/4 md:grid-cols-4">
        <ArticlesCategory />
        <ArticleSidebar />
      </div>
    </div>
  );
};

export default Application;
