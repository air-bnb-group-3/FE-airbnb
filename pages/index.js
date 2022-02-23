import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Homepage from "../pages/component/homePage";

export default function Home() {
  return (
    <div>
      <Homepage />
      <div class="flex space-x-2 justify-center">
        <button
          type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Button
        </button>
      </div>
    </div>
  );
}