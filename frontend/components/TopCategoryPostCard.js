import Image from "next/image";
import React from "react";

const TopCategoryPostCard = () => {
  return (
    <a
      href="#"
      className="flex flex-col mb-4 items-center bg-white border rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
    >
      <Image
        width="300"
        height="675"
        className="rounded-l-lg object-cover object-center"
        src="https://flowbite.com/docs/images/blog/image-1.jpg"
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <p className="text-sm lg:text-base">Sep 31, 2023</p>
        <h5 className="mb-2 leading-6 lg:leading-7 text-lg lg:text-xl line-clamp-2 font-bold tracking-tight text-gray-900">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 text-sm lg:text-base font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </a>
  );
};

export default TopCategoryPostCard;
