import React from "react";
import BlogPostCard from "../components/BlogPostCard";

const Latestposts = () => {
  return (
    <>
      <h2 className="mb-4 lg:mb-8 text-2xl md:text-3xl lg:text-4xl text-center font-bold tracking-tight text-gray-900">
        Latest Posts
      </h2>
      <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3 lg:gap-y-10 items-center">
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
      </div>
    </>
  );
};

export default Latestposts;
