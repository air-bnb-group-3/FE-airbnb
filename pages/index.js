import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer";
import HomepageSection2 from "../components/homepageSection2";
import Homepage from "../components/homepage";
import HomepageSection3 from "../components/homePageSection3";


export default function Home() {
 
  return (
    <div>
      <Homepage />
      <HomepageSection2 />
      <HomepageSection3 />
      <Footer />
    </div>
  );
}
