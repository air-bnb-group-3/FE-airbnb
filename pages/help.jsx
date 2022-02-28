import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function help() {
  return (
    <div>
      <div className="bg-[#f3f3f3]">
        <Navbar />
        <div className="mt-10 mx-20 grid mb-10 gap-14 md:grid-cols-1 items-center">
          <div className="container shadow-lg rounded-xl px-8 pt-3 bg-gray-200">
            <h1 className="font-semibold text-[20px] mb-2"> FAQ</h1>
            <h5 className="font-semibold text-[18px]">
              Q: Where are you based?
            </h5>
            <p className="mb-2">
              A: We're happily based in <b>Malang, Indonesia.</b>
            </p>
            <h5 className="font-semibold text-[18px]">
              Q: How does shipping work?
            </h5>
            <p className="mb-2">
              A: we elaborate with thousands partners, and we deliver to some
              countries accross the world! dont worry!
            </p>
            <h5 className="font-semibold text-[18px]">
              Q: The tracking number for my order stopped updating, what
              happened?
            </h5>
            <p className="mb-2">
              A: If you're buying from outside of the Kuvukiland (particularly
              in Kilimanjaro), your country's customs department may decide to
              hold your items at the border temporarily, often without
              explanation! Note: Kilimanjaro's customs department takes a
              particularly long time to resolve these holds. This is relatively
              rare, but if your order is held up in customs, we suggest calling
              your country's customs department directly and ask that they
              release your items immediately.
            </p>
            <h5 className="font-semibold text-[18px]">
              Q: What if I need to return my payment?
            </h5>
            <p className="mb-2">
              A: No worries! Contact us right away and we'll help guide you
              through the process - we'll send you a prepaid mailer to send the
              money back.
            </p>

            <h5 className="font-semibold text-[18px]">
              Q: How do we contact you?
            </h5>
            <p className="mb-2">
              A:{" "}
              <b>
                we provide instagram account and whatsapp. so, contact us if u
                need some help! 
              </b>
            </p>
            <p className=" flex justify-end text-[10px] mb-7">
              Copyright-2022 Nginep yuuk! inc. - your best vacation buddy
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default help;
