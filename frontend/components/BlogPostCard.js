import Image from "next/image";
import React from "react";

const BlogPostCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <Image
          width="382"
          height="220"
          className="rounded-t-lg object-cover object-center"
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <div className="p-5">
        <p>
          <span className="text-primary-700 font-medium">blog.category</span>
          &nbsp;&nbsp;&nbsp;Sep 31, 2023
        </p>
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-90">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 leading-6 font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;
