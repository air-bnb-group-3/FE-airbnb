import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import NextLink from "next/link";
import swal from "sweetalert";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

const urlsignUp = "http://18.136.193.63:8081/users/register";

export default function SignUp() {
  const [userNameInput, setUserNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const validateSignUp = () => {
    if (userNameInput === "") {
      swal("jangan kosong yaa usernyaa");
    } else if (emailInput === "") {
      swal("jangan kosong yaa emailnyaa");
    } else if (passwordInput === "") {
      swal("jangan kosong yaa passwordnya");
    } else {
      doSignUp();
    }
  };

  const doSignUp = () => {
    setLoading(true);
    const body = {
      name: userNameInput,
      email: emailInput,
      password: passwordInput,
    };
    axios
      .post(urlsignUp, body)
      .then((response) => {
        swal("siiip", "Register Akun berhasil!", "success");
        // localStorage.setItem(response.data.token);
        console.log("cek sukses", response);
        router.push("/Sign-In");
      })
      .catch((error) => {
        swal("wah!", "Email sudah digunakan cuy!", "error");
        console.log("cek error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {/* container */}
      <div className="bg-gradient-to-r from-green-300 via-yellow-50 to-green-300 block h-screen items-center justify-center p-4 md:flex">
        {/* login card */}
        <div className="bg-cover bg-image flex flex-col items-center max-w-screen-lg overflow-hidden rounded-lg shadow-lg text-gray-600 w-full md:flex-row">
          {/* logo */}
          <div className="backdrop-blur-sm backdrop-filter flex flex-col items-center justify-center p-4 text-white w-full md:w-1/2">
            {/* <h1 className="font-medium text-3xl">Selamat Datang</h1> */}
            {/* <p className="italic text-lg">Silahkan Daftar</p> */}
          </div>
          {/* form */}
          <div className="bg-white flex flex-col items-center p-4 space-y-8 w-full md:w-1/2">
            {/* welcome */}
            <div className="flex flex-col items-center">
              <h1 className="font-medium text-green-400 text-xl">
                Selamat Datang
              </h1>
              <p>Silahkan Daftar</p>
            </div>

            {/* inputs */}
            <form
              className="flex flex-col items-center space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative">
                <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400">
                  <FaUser />
                </span>
                <input
                  className="border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300"
                  placeholder="Nama Lengkap..."
                  type="text"
                  onChange={(e) => setUserNameInput(e.target.value)}
                />
              </div>
              <div className="relative">
                <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400">
                  <FiMail />
                </span>
                <input
                  className="border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300"
                  placeholder="Email..."
                  type="text"
                  onChange={(e) => setEmailInput(e.target.value)}
                />
              </div>
              <div className="relative">
                <span className="absolute flex inset-y-0 items-center pl-4 text-gray-400">
                  <FaLock />
                </span>
                <input
                  className="border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300"
                  placeholder="Kata Sandi..."
                  type="password"
                  onChange={(e) => setPasswordInput(e.target.value)}
                />
              </div>
              <button
                className="bg-orange-600 font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-green-500"
                type="submit"
                onClick={() => validateSignUp()}
              >
                <FaSignInAlt className="mr-2" />
                Daftar
              </button>
            </form>

            {/* link */}
            <div className="flex flex-col items-center">
              <p className="italic">
                Sudah punya akun?
                <NextLink href="/Sign-In">
                  <a className="ml-1 text-green-500 hover:underline">
                    Masuk di sini
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
