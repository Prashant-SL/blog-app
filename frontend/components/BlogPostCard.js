import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrowImg from "../public/images/arrow-right.svg";
import { backendUrlMain } from "../utils/url-helper";

const BlogPostCard = ({ details }) => {
  const { title, slug, body, category, createdAt, image } = details;
  const imgSrc = image
    ? `${backendUrlMain}/images/${image}`
    : "https://flowbite.com/docs/images/blog/image-1.jpg";

  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow">
      <Link href="#">
        <Image
          width="382"
          height="220"
          className="rounded-t-lg object-cover object-center cursor-pointer"
          src={imgSrc}
          alt=""
        />
      </Link>
      <div className="p-5">
        <p>
          <span className="text-primary-700 font-medium capitalize">
            {category}
          </span>
          &nbsp;&nbsp;&nbsp;{new Date(createdAt).toLocaleDateString()}
        </p>
        <a href="#">
          <h5 className="mb-2 text-xl font-bold line-clamp-2 tracking-tight text-gray-90">
            {title}
          </h5>
        </a>
        <p className="mb-3 leading-6 font-normal line-clamp-2 text-gray-700">
          {body}
        </p>
        <Link href={`/${slug}`}>
          <div className="inline-flex border border-primary-700 items-center px-3 py-2 text-sm font-medium text-center hover:text-white hover:border hover:border-white text-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Read more &nbsp;
            <Image
              src={arrowImg.src}
              height={arrowImg.height}
              alt="arrowimg"
              width={arrowImg.height}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
