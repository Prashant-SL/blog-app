import axios from "axios";
import React from "react";

const HeroSection = ({ posts }) => {
  // console.log("posts", posts);
  return (
    <section className="pb-10 border-t-2 bg-gradient-to-b from-blue-50 to-transparent">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <h1 className="mb-6 text-4xl capitalize font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          Welcome to the <span className="text-primary-800">IAmBlogger</span>
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-40">
          This is the blog app is built using NextJs version 12 and for styling
          i have used TailwindCSS and so on.
          <br />
          You can read blogs or if you want to showcase your writings, then you
          can write blogs your here.
        </p>
        <form className="w-full max-w-md mx-auto">
          <label
            htmlFor="default-email"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Email sign-up
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="email"
              id="default-email"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter email for Newsletters"
              required
            />
            <button
              onClick={() => alert("Thanks for signing Newsletter")}
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
