import { useEffect, useState } from "react";
import BlogPostCard from "./BlogPostCard";
import { useSelector } from "react-redux";

const LatestPosts = () => {
  const blogPosts = useSelector((state) => state.blogPost.blogPosts);

  useEffect(() => {
    const fetchCategories = (blogPosts) => {
      const catList = [];

      for (let i = 0; i < blogPosts.length; i++) {
        let categoryName = blogPosts[i].category.toLowerCase();
        catList.push(categoryName);
      }

      const topCategories = {};
      for (let i = 0; i < catList.length; i++) {
        if (topCategories[catList[i]] === undefined) {
          topCategories[catList[i]] = 1;
        } else {
          topCategories[catList[i]] += 1;
        }
      }
      return topCategories;
    };

    fetchCategories(blogPosts);
  }, [blogPosts]);

  return (
    <>
      <h2 className="mb-4 lg:mb-8 text-2xl md:text-3xl lg:text-4xl text-center font-bold tracking-tight text-gray-900">
        Latest Posts
      </h2>
      {Boolean(blogPosts.length > 0) && (
        <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3 lg:gap-y-10 items-center">
          {blogPosts.map((post) => (
            <BlogPostCard key={post._id} details={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default LatestPosts;
