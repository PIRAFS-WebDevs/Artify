import React from "react";
import ApplicationSearch from "./ApplicationSearch";
import ArticlesCategory from "./ArticleCategory";
import ArticleSidebar from "./ArticleSidebar";

const Application = () => {
  return (
    <div>
      <ApplicationSearch />
      <div className="grid w-full p-6 mx-auto md:grid-cols-5">
        <ArticlesCategory />
        <ArticleSidebar />
      </div>
    </div>
  );
};

export default Application;
