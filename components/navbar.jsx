import React from "react";
import Image from "next/image";
import navimg from "../assets/Group 14.png";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className=" bg-white drop-shadow-md items-center h-[70px]">
        <div className="flex justify-between">
          <div className="px-[80px] mt-2 ">
            <Image src={navimg} width="140px" height="40px" />
          </div>
          <div className="flex items-center text-[15px] mt-2">
            <Link href="/">
              <p className="font-semibold px-[60px] hover:text-orange-600 cursor-pointer">
                Home
              </p>
            </Link>
            <Link href="/nearbypage">
              <p className="font-semibold pr-[60px] hover:text-orange-600 cursor-pointer">
                {" "}
                Nearby
              </p>
            </Link>
            <p className="font-semibold hover:text-orange-600 cursor-pointer">
              {" "}
              Contact Us
            </p>
          </div>
          <div className="flex items-center">
            <div className="mt-3 xl:w-50 drop-shadow-lg ">
              <div className="input-group relative flex flex-inherit items-stretch w-full px-[50px] ">
                <input
                  type="search"
                  className="form-control relative flex-auto min-w-0 block w-full px-3 py-1  font-medium text-xs text-white bg-orange-600 bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-white focus:bg-orange-600 focus:border-white focus:outline-none "
                  placeholder="search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn relative px-5 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center ml-[-10px]"
                  type="button"
                  id="button-addon2"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    className="w-4 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <Link href="/Sign-In">
              <button
                type="button"
                className=" mt-3 drop-shadow-lg inline-block mr-10 px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight  rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
