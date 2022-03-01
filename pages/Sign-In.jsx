import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import NextLink from "next/link";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useRouter } from "next/router";
import navimg from "../assets/Group 14.png";
import Image from "next/image";

const urlLogin = "http://18.136.193.63:8081/users/login";

export default function SignIn() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const validateLogin = () => {
    if (emailInput === "") {
      swal("jangan kosong emailnya");
    } else if (passwordInput === "") {
      swal("jangan kosong yaa passwordnya");
    } else {
      doLogin();
    }
  };

  const doLogin = () => {
    setLoading(true);
    const body = {
      email: emailInput,
      password: passwordInput,
    };
    axios
      .post(urlLogin, body)
      .then((response) => {
        swal("yeeayy!", "kamu berhasil Login!", "success");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("dataProfile", response.data.message);
        router.push("/");
      })
      .catch((error) => {
        swal("wah!", "Email atau Password kamu salah!", "error");
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {/* container */}
      <div className="bg-[#f3f3f3] block h-screen items-center justify-center p-4 md:flex">
        {/* login card */}
        <div className="bg-cover bg-image flex flex-col items-center max-w-screen-lg overflow-hidden rounded-lg shadow-lg text-gray-600 w-full md:flex-row">
          {/* logo */}
          <div className="backdrop-blur-sm backdrop-filter flex flex-col items-center justify-center p-4 text-white w-full md:w-1/2"></div>
          {/* form */}
          <div className="bg-white flex flex-col items-center p-4 space-y-8 w-full md:w-1/2 ">
            <div className="w-[120px] h-[30px]">
              <Image src={navimg} />
            </div>
            {/* welcome */}
            <div className="flex flex-col  items-end pt-7">
              <h1 className="font-bold text-orange-400  leading-[35px] text-[40px]">
                Wah, <br />
                Jumpa lagi!
              </h1>
              <p className="font-semibold text-[12px] mt-2 mb-8">
                sudah waktunya kamu liburan nih!
              </p>
            </div>

            {/* inputs */}
            <form
              className="flex flex-col items-center space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative">
                <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400">
                  <FiMail />
                </span>
                <input
                  className="border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-orange-300"
                  placeholder="  isi Email kamu yaa "
                  type="text"
                  onChange={(e) => setEmailInput(e.target.value)}
                />
              </div>
              <div className="relative">
                <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400">
                  <FaLock />
                </span>
                <input
                  className="border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-orange-300"
                  placeholder="masukkan sandi kamuu"
                  type="password"
                  onChange={(e) => setPasswordInput(e.target.value)}
                />
              </div>
              <button
                className="bg-orange-400 font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-green-500"
                type="submit"
                onClick={() => validateLogin()}
              >
                <FaSignInAlt className="mr-2" />
                Masuk
              </button>
            </form>

            {/* link */}
            <div className="flex pt-10 justify-between">
              <p className="text-sm ">
                Belum punya akun?
                <NextLink href="/Sign-Up">
                  <a className="ml-1 text-sm text-orange-500 hover:underline">
                    Daftar di sini cuy!
                  </a>
                </NextLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
