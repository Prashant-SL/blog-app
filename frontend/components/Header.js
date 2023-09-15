import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navbarItems = [
    { label: "Write Blog", url: "/create", button: true },
    { label: "Contact Us", url: "/contact" },
    { label: "About Us", url: "/about" },
    { label: "Login", url: "/login" },
  ];

  const mapNavbar = (type) => (
    <div
      className={`flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ${
        type && "items-center"
      }`}
    >
      {navbarItems.map((item) => (
        <Link key={item.label} href={item.url}>
          <p
            className={
              item.button
                ? "text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                : "block cursor-pointer py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
            }
          >
            {item.label}
          </p>
        </Link>
      ))}
    </div>
  );

  return (
    <nav className="bg-white border-gray-200 border-b shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center cursor-pointer text-2xl font-semibold whitespace-nowrap">
            IAmBlogger
          </span>
        </Link>

        <button
          type="button"
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {mobileMenu && (
          <div
            className="md:hidden z-20 absolute left-0 px-2 top-16 w-full"
            id="navbar-dropdown"
          >
            {mapNavbar()}
          </div>
        )}

        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          {mapNavbar("desktop")}
        </div>
      </div>
    </nav>
  );
};

export default Header;
