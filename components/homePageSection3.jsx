import React from "react";
import Image from "next/image";
import Bali from "../assets/bali.svg";
import Bandung from "../assets/bandung.svg";
import Jogja from "../assets/jogja.svg";
import Malang from "../assets/malang.svg";
import Senyum from "../assets/senyum.svg";
import Link from "next/link";

function homePageSection3() {
  return (
    <div className="bg-[#f3f3f3]">
      <div className="px-8">
        <p className="font-bold text-3xl">inspiration for your next trip</p>
        <p className="font-light">get your best places around you !</p>
        <div className="flex justify-between py-6 ">
          <div className="hover:opacity-80 cursor-pointer">
            <Link href="/nearbypage">
              <Image src={Malang} />
            </Link>
          </div>
          <div className="hover:opacity-80 cursor-pointer">
            <Link href="/nearbypageBandung">
              <Image src={Bandung} />
            </Link>
          </div>
          <div className="hover:opacity-80 cursor-pointer">
            <Image src={Bali} />
          </div>
          <div className="hover:opacity-80 cursor-pointer">
            <Image src={Jogja} />
          </div>
        </div>
      </div>
      <div className="grid relative pt-12 mb-[-150px] z-20">
        <p className="pl-[100px] text-white font-bold text-2xl w-[300px]">
          {" "}
          Questions About Hosting?
        </p>
        <div className="pl-[100px] ">
          <button
            type="button"
            className=" mt-3 drop-shadow-lg inline-block mr-10 px-5 py-2.5 bg-white text-black font-bold text-sm leading-tight  rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg   transition duration-150 ease-in-out"
          >
            Ask SuperHost
          </button>
        </div>
      </div>
      <div className="grid justify-center pt-4 pb-10 z-0">
        <Image src={Senyum} />
      </div>
    </div>
  );
}

export default homePageSection3;
