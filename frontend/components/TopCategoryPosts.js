import React, { useEffect } from "react";
import TopCategoryPostCard from "./TopCategoryPostCard";
import { backendUrl } from "../utils/url-helper";
import axios from "axios";

const TopCategoryPosts = ({ topCategories }) => {
  return (
    <div className="mx-auto">
      <div className="flex mb-6 relative justify-between items-center">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          Category Name
        </h2>
        <h2 className=" text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm tracking-tight px-4 py-2">
          Read all
        </h2>
      </div>
      {}
      <TopCategoryPostCard />
      <TopCategoryPostCard />
    </div>
  );
};

export default TopCategoryPosts;
