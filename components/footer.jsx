import React from "react";
import footerimg from "../assets/Group 14.png";
import Image from "next/image";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
// import Link from "next/link";

function footer() {
  return (
    <>
      <div className="flex justify-between bg-white drop-shadow-md  h-[70px] mt-5">
        <div className="flex py-5 px-[60px]">
          <Image src={footerimg} width="100px" height="30px" />
          <p className="px-10 pt-2 text-sm">
            © 2022 Ngineep Yuuk, Inc. All Right Reserved.{" "}
          </p>
        </div>
        <div className="flex justify-start mt-7 px-5">
          <p className="px-2">
            <AiFillInstagram />
          </p>
          <p className="px-2">
            <AiOutlineTwitter />
          </p>
          <p className="px-2">
            <AiFillFacebook />
          </p>
        </div>
      </div>
    </>
  );
}

export default footer;
