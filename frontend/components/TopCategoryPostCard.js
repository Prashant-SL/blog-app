import Image from "next/image";
import React from "react";

const TopCategoryPostCard = () => {
  return (
    <a
      href="#"
      class="flex flex-col mb-4 items-center bg-white border rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <Image
        width="400"
        height="425"
        className="rounded-l-lg object-cover object-center"
        src="https://flowbite.com/docs/images/blog/image-1.jpg"
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <p>Sep 31, 2023</p>
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="mb-3 font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </a>
  );
};

export default TopCategoryPostCard;
