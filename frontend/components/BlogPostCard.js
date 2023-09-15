import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrowImg from "../public/images/arrow-right.svg";

const BlogPostCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow">
      <Link href="#">
        <Image
          width="382"
          height="220"
          className="rounded-t-lg object-cover object-center cursor-pointer"
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          alt=""
        />
      </Link>
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
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center hover:text-white text-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more &nbsp;
          <Image
            src={arrowImg.src}
            height={arrowImg.height}
            alt="arrowimg"
            width={arrowImg.height}
          />
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;
