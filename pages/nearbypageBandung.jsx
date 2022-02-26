import React from "react";
import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Kamar1 from "../assets/kamar 1.svg";
import Kamar2 from "../assets/kamar 2.svg";
import Kamar3 from "../assets/kamar 3.svg";
import Maps from "../assets/maps.svg";

function nearbypage() {
  return (
    <div>
      <Navbar />
      <div className="bg-[#f3f3f3]">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <div className="pl-[50px] pt-5">
              <p className="text-2xl font-bold ">Stays in Bandung</p>
              <p className="font-light text-sm pb-2"> 400++ Recomendations</p>
              <button
                type="button"
                className=" mt-3 drop-shadow-lg inline-block mr-3  px-4 py-1.5 bg-orange-600 text-white font-medium text-xs leading-tight  rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg  transition duration-150 ease-in-out"
              >
                Price
              </button>
              <button
                type="button"
                className=" mt-3 drop-shadow-lg inline-block  mr-3 px-4 py-1.5 bg-orange-600 text-white font-medium text-xs leading-tight  rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg  transition duration-150 ease-in-out"
              >
                Person
              </button>
              <button
                type="button"
                className=" mt-3 drop-shadow-lg inline-block mr-3  px-4 py-1.5 bg-orange-600 text-white font-medium text-xs leading-tight  rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg  transition duration-150 ease-in-out"
              >
                Rooms
              </button>
              <button
                type="button"
                className=" mt-3 drop-shadow-lg inline-block mr-3  px-4 py-1.5 bg-orange-600 text-white font-medium text-xs leading-tight  rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg  transition duration-150 ease-in-out"
              >
                Price
              </button>
              <div className=" bg-white border-black solid mt-5 mb-5 ">
                <div className="py-2 px-2 flex justify-start">
                  <Image src={Kamar3} />
                  <div className="px-5">
                    <p className="text-xs font-light">
                      entire apartment in bandung
                    </p>
                    <p className="font-bold">Oyo Teh Lini, Apartment</p>
                    <p className="font-light">
                      2 Guest. 1 Beds. 1 Private Bath
                    </p>
                    <p className="font-light mb-7">Wifi. Pool. Kitchen</p>
                    <div className="flex justify-between">
                      <p className="font-light pr-[180px]"> 4.2 (440 Review)</p>
                      <p className="font-bold text-orange-600">
                        {" "}
                        Rp. 235.000/Night
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" bg-white border-black solid mt-5 mb-5 ">
                <div className="py-2 px-2 flex justify-start">
                  <Image src={Kamar1} />
                  <div className="px-5">
                    <p className="text-xs font-light">
                      entire Hotel in bandung
                    </p>
                    <p className="font-bold">Hotel MAntapp Kang Ade, Hotel</p>
                    <p className="font-light text">
                      2 Guest. 2 Beds. 1 Private Bath
                    </p>
                    <p className="font-light mb-7">Wifi. Pool. Kitchen</p>
                    <div className="flex justify-between">
                      <p className="font-light pr-[180px]"> 4.8 (990 Review)</p>
                      <p className="font-bold text-orange-600">
                        {" "}
                        Rp. 265.000/Night
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" bg-white border-black solid mt-5 mb-5 ">
                <div className="py-2 px-2 flex justify-start">
                  <Image src={Kamar2} />
                  <div className="px-5">
                    <p className="text-xs font-light">
                      entire apartment in bandung
                    </p>
                    <p className="font-bold">Oyo Neng Mirna, Apartment</p>
                    <p className="font-light">
                      2 Guest. 2 Beds. 1 Private Bath
                    </p>
                    <p className="font-light mb-7">Wifi. Pool. Kitchen</p>
                    <div className="flex justify-between">
                      <p className="font-light pr-[180px]"> 5.0 (110 Review)</p>
                      <p className="font-bold text-orange-600">
                        {" "}
                        Rp. 340.000/Night
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" bg-white border-black solid mt-5 mb-5 ">
                <div className="py-2 px-2 flex justify-start">
                  <Image src={Kamar3} />
                  <div className="px-5">
                    <p className="text-xs font-light">
                      entire apartment in bandung
                    </p>
                    <p className="font-bold">
                      Oyo Syariah Kang Sule, Apartment
                    </p>
                    <p className="font-light">
                      2 Guest. 1 Beds. 1 Private Bath
                    </p>
                    <p className="font-light mb-7">Wifi. Pool. Kitchen</p>
                    <div className="flex justify-between">
                      <p className="font-light pr-[180px]"> 4.0 (340 Review)</p>
                      <p className="font-bold text-orange-600">
                        {" "}
                        Rp. 225.000/Night
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid justify-center px-5 pt-[100px]">
            <Image src={Maps} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default nearbypage;
