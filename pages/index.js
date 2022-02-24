import Image from "next/image";
import styles from "../styles/Home.module.css";
// import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HomepageSection2 from "../components/homepageSection2";
import Homepage from "../components/homepage";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}

      <Homepage />
      <HomepageSection2 />
      <Footer />
    </div>
  );
}
