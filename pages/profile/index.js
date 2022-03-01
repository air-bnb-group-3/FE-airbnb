import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

function Profile() {
  const [profile, setProfile] = useState([]);
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjp0cnVlLCJleHAiOjE2NDU5MzQxODMsImlkIjo4LCJyb2xlcyI6dHJ1ZX0.Rkm8oBdgO4X4PloLhF1kUmO6hXTDShMjTSMAe1eZdiI";
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("http://18.136.193.63:8081/users", config)
      .then(({ data }) => {
        setProfile(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  function handleDelete() {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjp0cnVlLCJleHAiOjE2NDYwMjk3NzgsImlkIjozMiwicm9sZXMiOmZhbHNlfQ.fPiKHiHr-kaFwe8eICcLIMudbX4ArhaRerOi8D6-ZNY";
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .delete("http://18.136.193.63:8081/users", config)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }

  return (
    <>
      <Navbar />
      <div className="h-screen pt-20 bg-gray-100">
        <div className="container mx-auto ">
          <h1 class="text-center font-bold text-2xl">Account Setting</h1>
        </div>

        {/* Main course */}
        <div className="flex justify-center flex-col mx-auto py-6 ml-24">
          <div class="mb-3 xl:w-96 pb-3">
            <label
              for="exampleFormControlInput1"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              class="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-gray-200 
                                    bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
              value={profile.name}
              disabled
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div class="mb-3 xl:w-96 pb-3">
            <label
              for="examplePassword0"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              class="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-gray-200 
                                    bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
              disabled
              placeholder="*********"
            />
          </div>
          <div class="mb-3 xl:w-96">
            <label
              for="exampleEmail0"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Email input
            </label>
            <input
              type="email"
              class="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-gray-200
                                    bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
              disabled
              value={profile.email}
            />
          </div>

          <div class="mb-3 xl:w-96 pt-10 pb-10">
            <p class="text-blue-600 cursor-pointer" onClick={handleDelete}>
              Delete Your Account
            </p>
            <br />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
          <div className="buttonAction flex justify-between pb-5">
            <Link href="/profile/editUser">
              <button class="w-96 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Change Data
              </button>
            </Link>
          </div>
        </div>

        {/* Avatar */}
        <div className="right flex flex-col mx-auto py-6 col-span-2 ml-80">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
            width={137}
            height={129}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
