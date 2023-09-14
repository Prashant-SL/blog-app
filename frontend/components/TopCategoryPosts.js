import React from "react";
import TopCategoryPostCard from "./TopCategoryPostCard";

const TopCategoryPosts = () => {
  return (
    <div>
      <h2 className="mb-4 lg:mb-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Category Name
      </h2>
      <TopCategoryPostCard />
      <TopCategoryPostCard />
    </div>
  );
};

export default TopCategoryPosts;
