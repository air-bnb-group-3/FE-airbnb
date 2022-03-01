import React from "react";
import { useEffect } from "react";
// import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions/index";
import Image from "next/image";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
// import Kamar1 from "../../assets/kamar 1.svg";
// import Kamar2 from "../../assets/kamar 2.svg";
import Kamar3 from "../../assets/kamar 3.svg";
import Maps from "../../components/maps";
import { useRouter } from "next/router";

const baseUrl = "http://18.136.193.63:8081/categories/1";

function nearbypage() {
  const router = useRouter();

  const { id } = router.query;

  const dispatch = useDispatch();
  const dataCategories = useSelector(
    (data) => data.categoriesDetailReducer.listAllCategories
  );

  const filterBedSize = () => {
    dispatch(allStore.filterBed(dataCategories));
  };

  useEffect(() => {
    console.log("masuk use effect");
    if (id) {
      dispatch(allStore.getDetailCategories(id));
    }
  }, [id]);
  console.log("cek data categories", dataCategories);

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
              <div className="flex justify-start">
                <div class="mb-3 w-18">
                  <select
                    class="form-select drop-shadow-lg appearance-none
      block
      w-full
      px-1.5
      py-1
      text-xs
      font-semibold
      text-white
      bg-orange-600 bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded-full
      transition
      ease-in-out
      m-0
      focus:text-white focus:bg-blue-600 focus:border-blue-600 focus:outline-none"
                    aria-label="bed"
                    onClick={(e) =>
                      dispatch(allStore.filterBed(e.target.value))
                    }
                  >
                    <option value="single">single</option>
                    <option value="double">double</option>
                    <option value="queen">queen</option>
                  </select>
                </div>

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
              </div>

              {dataCategories.Rooms
                ? dataCategories.Rooms.map((el, i) => (
                    <div className=" bg-white border-black solid mt-5 mb-5 ">
                      <div className="py-3 px-2 flex justify-start hover:opacity-70 cursor-pointer">
                        <Image
                          src={Kamar3}
                          onClick={() => {
                            router.push(`/detail/${i}`);
                          }}
                        />
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
            {dataCategories.latitude ? (
              <Maps
                latitude={dataCategories.latitude}
                longitude={dataCategories.longitude}
              />
            ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default nearbypage;
