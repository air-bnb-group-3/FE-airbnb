import React from "react";
import { useEffect } from "react";
// import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../store/actions/index";
import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Kamar1 from "../assets/kamar 1.svg";
import Kamar2 from "../assets/kamar 2.svg";
import Kamar3 from "../assets/kamar 3.svg";
import Maps from "../components/maps";
import { useRouter } from "next/router";

const baseUrl = "http://18.136.193.63:8081/categories/1";

function nearbypage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const dataCategories = useSelector(
    (data) => data.categoriesDetailReducer.listAllCategories
  );

  useEffect(() => {
    dispatch(allStore.getDetailCategories());
  }, [dispatch]);
  // console.log("cek data categories", dataCategories);

  return (
    <div>
      <Navbar />
      <div className="bg-[#f3f3f3]">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <div className="pl-[50px] pt-5">
              <p className="text-2xl font-bold ">
                Stays in {dataCategories.city}
              </p>
              <p className="font-light text-sm pb-2"> 100++ Recomendations</p>
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
                Bed
              </button>

              {dataCategories.Rooms
                ? dataCategories.Rooms.map((el, i) => (
                    <div className=" bg-white border-black solid mt-5 mb-5 ">
                      <div className="py-3 px-2 flex justify-start hover:opacity-70 cursor-pointer">
                        <Image src={Kamar3} />
                        <div className="px-5">
                          <p className="text-xs font-light">{el.description}</p>
                          <div>
                            <div />
                            <p className="font-bold">{el.name}</p>
                            <p className="font-light font-xs">{el.address}</p>
                            <p className="font-semibold mb-7 text-[14px] ">
                              <b>Person:</b> {el.total_person}, <b>Rooms: </b>
                              {el.total_rooms}, <b>Size Bed:</b> {el.size_bed}
                            </p>
                            <div className="flex justify-between">
                              <p className="font-light pr-[180px]">
                                {" "}
                                4.2 (440 Review)
                              </p>
                              <p className="font-bold text-orange-600">
                                {" "}
                                Rp. {el.price} / Night
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>

          <div className="grid pt-2 pl-2">
            <Maps />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default nearbypage;
