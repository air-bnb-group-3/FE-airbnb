import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { MdPeopleAlt } from 'react-icons/md';
import { BiDoorOpen } from 'react-icons/bi';
import { MdOutlineKingBed } from 'react-icons/md';
import swal from 'sweetalert';
import axios from 'axios';
import { useState, useEffect } from 'react';

function confirmOrder() {
  const body = {};
  // const token = localStorage.getItem('token');
  // const config = {
  //   headers: { Authorization: `Bearer ${token}` },
  // };
  swal({
    title: 'Are you sure?',
    text: 'Confirm Order ?',
    icon: 'warning',
    buttons: true,
    dangerMode: true,
  }).then((willOrder) => {
    if (willOrder) {
      axios
        .put('http://18.136.193.63:8081/transaction')
        .then(({ data }) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err, 'error');
        });
      swal('Tahnk your for your payment', {
        icon: 'success',
      });
    } else {
      swal('Abort the mission');
    }
  });
}

function Index() {
  return (
    <div>
      <Navbar />

      <div className="h-vh pt-5 bg-gray-100 mb-64">
        <div className="mainCouse mt-10">
          <h1 className="font-bold mb-5 text-2xl sm:text-4xl grid justify-items-center">
            Payment
          </h1>

          {/* Description  */}
          <div className="flex mt-10 bg-neutral-200 w-full h-vh mx-auto mb-10">
            <img
              src="https://cimages.elitehavens.com/images/gallery/hires/P00022/13.%20Villa%20Tievoli%20-%20Bedroom%20lavish%20design.jpg"
              width={500}
            />
            <div className="flex flex-col ml-40">
              <h1 className="font-bold text-2xl sm:text-4xl mt-10">
                Villa 1 kamar
              </h1>
              <p className="text-gray-700">Jl. Ikan kesayangan</p>
              <div className="flex justify-between mt-5">
                <div className="flex flex-col">
                  <h1>
                    <span className="text-gray-700">
                      (description)
                      <br /> Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Quisquam, quidem.
                    </span>
                  </h1>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-700 mt-10 font-bold">
                  Feb, 27 2022 <span className="font-light">to</span> March, 31
                  2022
                </p>
              </div>
              <div className="flex mt-10">
                <div className="flex flex-col bg-neutral-400 p-5 rounded mr-5">
                  <MdPeopleAlt size={30} />
                  <h1 className="mt-2"> 2 People</h1>
                </div>
                <div className="flex flex-col bg-neutral-400 p-5 rounded mr-5">
                  <BiDoorOpen size={30} />
                  <h1 className="mt-2"> 2 Bathroom</h1>
                </div>
                <div className="flex flex-col bg-neutral-400 p-5 rounded mr-5">
                  <MdOutlineKingBed size={30} />
                  <h1 className="mt-2"> Queen Bed</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-23 mx-auto">
              <div className="flex justify-center mt-7">
                <img
                  src="https://www.informasidaerah.com/wp-content/uploads/2021/09/Apa-Itu-KlikBCA--1024x576.png"
                  width={300}
                />
              </div>
              <div className="flex  mt-2">
                <h1 className="font-bold text-2xl sm:text-4xl mt-1">
                  <span className="font-light text-sm">
                    total spent 32 Day's
                  </span>{' '}
                  Rp. 5.000.000
                </h1>
              </div>
              <div className="flex mt-4">
                <div className="flex flex-col">
                  <span className="text-gray-700 font-medium mb-2">
                    Card Number
                  </span>
                  <input
                    type="text"
                    class="
                        form-control
                        block
                        w-96
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-gray-300 
                        bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                    placeholder="972723xxxxxx"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <button
                className="bg-emerald-500 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded mt-3 mb-5"
                onClick={confirmOrder}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
