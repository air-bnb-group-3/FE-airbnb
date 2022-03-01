import React from "react";
import rooms1 from "../assets/Group 549.svg";
import rooms2 from "../assets/Group 550.svg";
import rooms3 from "../assets/Group 551.svg";
import peop1 from "../assets/people1.svg";
import peop2 from "../assets/people2.svg";
import peop3 from "../assets/people3.svg";
import Image from "next/image";

function homepageSection2() {
  return (
    <div className="bg-[#f3f3f3] mt-[70px]">
      <div className="px-8">
        <p className="font-bold capitalize text-2xl pt-8">
          What Guest are saying about rooms in nginep yuk!
        </p>
        <p className="font-light capitalize">
          {" "}
          over 1 M guest review with an average of 4,8 out of 5,0 stars
        </p>

        <div className="flex justify-between">
          <div className="grid justify-start mt-10">
            <Image src={rooms1} />
            <p className="font-semibold text-sm"> Amerta Hills</p>
            <p className="w-[300px] text-left text-sm">
              {" "}
              "Wah mantapp kaliii nginep sini cuyy, udah harganya murah,
              pelayanan mantapp, tapi minesnya satu kamar mandinya diluar
              wkwkwk"
            </p>
            <div className="mt-10 mb-10">
              <Image src={peop1} width="200px" />
            </div>
          </div>
          <div className="grid justify-start mt-10">
            <Image src={rooms2} />
            <p className="font-semibold text-sm">Oyo Bang Sukirmin</p>
            <p className="w-[300px] text-left text-sm">
              {" "}
              yaaaaaaa gimans yaaa dapet makan gratis, tapi minumnya kok bayar
              yaa. sofar sogood sih pelayanan mantapp, rekomended kesini guysss!
            </p>
            <div className="mt-10 mb-10">
              <Image src={peop2} width="200px" />
            </div>
          </div>
          <div className="grid justify-start mt-[45px]">
            <Image src={rooms3} />
            <p className="font-semibold text-sm">Fave Hotell </p>
            <p className="w-[300px] text-left text-sm">
              {" "}
              "the best cuy kesini, lagi diskon juga di nginep yuuk cuman bayar
              goceng! pelayanan mantapp, dapet makan lagi, tapi sediih cuman
              roti ajaa"
            </p>
            <div className="mt-10 mb-10">
              <Image src={peop3} width="200px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default homepageSection2;
