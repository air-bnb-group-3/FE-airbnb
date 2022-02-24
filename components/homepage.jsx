import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import bgimg from "../assets/Group 548.png";
import Image from "next/image";

function homepage() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 mt-5">
        <Image src={bgimg} />
      </div>
      <div className="mt-[-200px]">
        <div className="grid justify-center mb-10">
          <button
            type="button"
            className=" mt-3 drop-shadow-lg inline-block mr-10 px-6 py-2.5 bg-orange-600 text-white font-medium text-sm leading-tight  rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Get Inspired
          </button>
        </div>
        <div className="grid justify-center relative drop-shadow-lg">
          <div className=" bg-white rounded-2xl w-[900px] h-[70px]">
            <div className="font-semibold flex justify-between px-10 mt-5">
              <p className="text-black text-center text-sm leading-none">
                lebih dari 100 partner
                <br /> kerjasama mantapp
              </p>
              <p className="text-black text-center text-4xl mt-[-8px]"> | </p>
              <p className="text-black text-center text-sm leading-none">
                Bisa nginep sekarang
                <br /> bayar belakangan !
              </p>
              <p className="text-black text-center text-4xl mt-[-8px]"> | </p>
              <p className="text-black text-center text-sm leading-none">
                certified partner, over 4 stars
                <br /> quality service
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-[50px] px-7">
        <p> partner pembayaran</p>
        <p> brand rekomendasi nginep yuuk</p>
        <p> nunggu apa lagi? yuk pesen!</p>
      </div>
      <Footer />
    </div>
  );
}

export default homepage;
