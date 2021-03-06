import { MdPeopleAlt } from "react-icons/md";
import { BiDoorOpen } from "react-icons/bi";
import { MdOutlineKingBed } from "react-icons/md";
import Image1 from "../../assets/feat1.png";
import Image2 from "../../assets/bloom-man-giving-online-support-via-laptop.png";
import Image3 from "../../assets/bloom-woman-with-sprayer-and-detergents-cleaning-up.png";
import Image4 from "../../assets/bloom-woman-leads-webinar-on-computer-via-online.png";
import Image from "next/image";
import Room1 from "../../assets/room1.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import swal from "sweetalert";

function DetailRoom() {
  const router = useRouter();
  const { id } = router.query;
  const [token, setToken] = useState("");
  const [rooms, setRooms] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [image, setImage] = useState("");
  const days = sumDay();
  const [priceFormat, setPriceFormat] = useState();
  const [variant, setVariant] = useState("danger");
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);

    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    console.warn("Cek masukk");
    // const token = localStorage.getItem("token")
    // const config = {
    //     headers: {Authorization: `Bearer ${token}`},
    // }
    if (id) {
      axios
        .get(`http://18.136.193.63:8081/rooms/${id}`)
        .then(({ data }) => {
          setRooms(data.data);
          setImage(data.data.Images[1].image);
        })
        .catch((err) => {
          console.log(err, "error");
        });
    }
  }, [id]);

  function addToCartHandler() {
    const body = {
      rooms_id: id,
      check_in: formatDate(startDate),
      check_out: formatDate(endDate),
    };
    const tokens = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${tokens}` },
    };
    axios
      .post(
        "http://ec2-18-136-193-63.ap-southeast-1.compute.amazonaws.com:8081/booking",
        body,
        config
      )
      .then(({ data }) => {
        console.log(data);
        setStatus(true);
        swal("siip", "berhasil boooking room !, yuk lanjut payment", "success");
        setVariant("success");
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }

  const formatDate = (startDate) => {
    const newDate = startDate.toISOString().split("T")[0];
    return newDate + " 12:30:00";
  };

  function sumDay() {
    const difTime = endDate.getTime() - startDate.getTime();
    const days = Math.round(difTime / (1000 * 60 * 60 * 24));
    const price = days * rooms.price;
    return days;
  }

  return (
    <>
      <Navbar />
      <div className="h-vh pt-20 bg-gray-100">
        <div className="container mx-auto">
          {/* Room name */}
          <div className="roomName mb-5">
            <h1 className="text-2xl sm:text-4xl font-bold">
              {rooms.name} <span className="text-lg">{rooms.address}</span>
            </h1>
          </div>
          {/* Category */}
          <div className="category flex ">
            <div className="bg-teal-300 p-3 rounded mr-5">Solo traveling</div>
            <div className="bg-teal-300 p-3 rounded mr-5">Couple</div>
            <div className="bg-teal-300 p-3 rounded mr-5">Tourist</div>
            <div className="bg-teal-300 p-3 rounded mr-5">City center</div>
          </div>
          {/* Preview image */}
          <div className="relative h-[300px] sm:h-[500px] lg:h[500px] xl:h[600px] 2xl:h[700px] mt-10 flex justify-center">
            {loading ? (
              //  <button type="button" class="bg-indigo-500 ..." disabled>
              <div>
                <svg
                  className="animate-spin h-60 w-60 mr-3 ..."
                  viewBox="0 0 24 24"
                ></svg>
                Processing...
              </div>
            ) : (
              //    </button>
              <img src={image} layout="fill" objectFit="cover" width="full" />
            )}
          </div>
          {/* Detail room */}
          <div className="mainCouse mt-10">
            <h1 className="font-bold mb-5 text-2xl sm:text-4xl grid justify-items-center">
              Detail's
            </h1>
            {/* Fiture */}
            <div className="flex justify-center">
              <div className="flex flex-col bg-neutral-200 p-5 rounded mr-5">
                <MdPeopleAlt size={30} />
                <h1 className="mt-5">{rooms.total_person} People</h1>
              </div>
              <div className="flex flex-col bg-neutral-200 p-5 rounded mr-5">
                <BiDoorOpen size={30} />
                <h1 className="mt-5">{rooms.total_rooms} Bathroom</h1>
              </div>
              <div className="flex flex-col bg-neutral-200 p-5 rounded mr-5">
                <MdOutlineKingBed size={30} />
                <h1 className="mt-5">{rooms.size_bed} bed</h1>
              </div>
            </div>
            {/* Description  */}
            <div className="description mt-10">
              <p className="font-semibold">{rooms.description}</p>
            </div>
            {/* DLC */}
            <h1 className="font-bold mt-20 mb-5 text-3xl">Room {rooms.name}</h1>
            <div className="flex mx-auto">
              <div className="flex flex-col mx-auto">
                <div className="flex bg-emerald-100 p-7 rounded mr-5 w-96 mx-auto">
                  <Image src={Image1} width={100} height={100} />
                  <div className="flex flex-col">
                    <h1 className="mt-5 text-gray-400 ">Feature #1</h1>
                    <h1 className="text-emerald-600 pt-3 font-semibold">
                      Electronic Check-in <br />
                      and Check out
                    </h1>
                  </div>
                </div>
                <div className="flex bg-gray-200 p-7 rounded mr-5 mt-5 w-96">
                  <Image src={Image2} width={100} height={100} />
                  <div className="flex flex-col">
                    <h1 className="mt-5 text-gray-400 ">Feature #2</h1>
                    <h1 className="text-black-600 pt-3 font-semibold">
                      Workspace Ready
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="flex bg-gray-200 p-7 rounded mr-5 w-96  ">
                  <Image src={Image3} width={100} height={100} />
                  <div className="flex flex-col">
                    <h1 className="mt-5 text-gray-400 ">Feature #1</h1>
                    <h1 className="text-black-600 pt-3 font-semibold">
                      Free housekeeping <br />
                      Services
                    </h1>
                  </div>
                </div>
                <div className="flex bg-gray-200 p-7 rounded mr-5 mt-5 w-96">
                  <Image src={Image4} width={100} height={100} />
                  <div className="flex flex-col">
                    <h1 className="mt-5 text-gray-400 ">Feature #2</h1>
                    <h1 className="text-black-600 pt-3 font-semibold">
                      24/7 Contact Support
                    </h1>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 p-7 rounded mr-5 w-full mx-auto">
                <div className="font-semibold text-3xl text-center">
                  Rp {rooms.price}
                  <span className="text-sm font-semibold">/ night</span>
                </div>
                <hr className=" border-gray-300 mt-3" />
                <div className="flex justify-around mt-5">
                  <div className="flex flex-col">
                    <h1 className="font-semibold mb-2">start check in</h1>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="dd/MM/yyyy"
                      minDate={new Date()}
                      showYearDropdown
                      scrollableMonthYearDropdown
                      placeholderText="Check in"
                    />
                  </div>
                  <span className="mt-7">to</span>
                  <div className="flex flex-col">
                    <h1 className="font-semibold mb-2">end check out</h1>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      dateFormat="dd/MM/yyyy"
                      minDate={endDate}
                      showYearDropdown
                      scrollableMonthYearDropdown
                      placeholderText="Check-out"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-10">
                  <div className="flex justify-between">
                    <span className="font-semibold">Total ( {days} ) hari</span>
                    <div className="flex flex-col ml-5">
                      <h1 className="font-semibold">
                        Rp {sumDay() * rooms.price}
                        <span className="text-2xl"></span>
                      </h1>
                    </div>
                  </div>
                  <button
                    onClick={() => addToCartHandler()}
                    className="bg-emerald-500 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded mt-12"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            {/* Time check in */}
            <div className="timeCheck flex mt-10 mb-10 mx-auto">
              <div className="border border-gray-400 w-full h-36 rounded mr-5 flex justify-evenly">
                <div className="flex flex-col ml-5">
                  <h1 className="mt-5 ml-5 font-semibold">Check-In Time</h1>
                  <h1 className="mt-4 ml-5 font-semibold">2PM</h1>
                  <p className="text-gray-400 text-sm ml-5 mt-1">
                    Early check-in Upon Request
                  </p>
                </div>
                <div className="flex flex-col mx-auto">
                  <h1 className="mt-4 ml-5 font-semibold">Check-Out Time</h1>
                  <h1 className="mt-5 ml-5 font-semibold">11PM</h1>
                  <p className="text-gray-400 text-sm ml-5 mt-1">
                    Late check-out Upon Request
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default DetailRoom;
