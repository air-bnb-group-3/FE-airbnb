import {MdOutlineEdit} from 'react-icons/md'
import {GoTrashcan} from 'react-icons/go'
import Link from 'next/link'
import { useRouter } from 'next/router';
import axios from 'axios';
import { useState, useEffect } from "react";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
function MyHouse() {
    const router = useRouter();
    const [house, setHouse] = useState([]);
    const [roomName, setRoomName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
    const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjp0cnVlLCJleHAiOjE2NDYwMjA3OTIsImlkIjozMCwicm9sZXMiOmZhbHNlfQ.rjug6ljhztL-9M6C3xYA5gizJoKrNgOGSSP_NeoPdiI';
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get('http://18.136.193.63:8081/rooms/all', config)
      .then(({ data }) => {
        setHouse(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err, 'error');
      });
    }, []);

    function handleDelete() {
        const token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjp0cnVlLCJleHAiOjE2NDYwMjA3OTIsImlkIjozMCwicm9sZXMiOmZhbHNlfQ.rjug6ljhztL-9M6C3xYA5gizJoKrNgOGSSP_NeoPdiI';
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        axios
          .delete('http://18.136.193.63:8081/rooms', config)
          .then(({ data }) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err, 'error');
          });
      }

    return (
        <>
        <Navbar />
        <div className="h-vh pt-20 bg-gray-100">
            <div className="container mx-auto ">
                <h1 class="text-center font-bold text-2xl">My House</h1>
            </div>
            <div className="max-w-4xl mx-5 pt-5 xl:mx-auto mb-10">  
                <div className="flex justify-around shadow-lg">
                    <div className="left mt-10">
                        {/* Menu left */}
                        <div className="container mx-auto px-4 pb-5">
                            <Link href="../../profile">
                                <h1 className="cursor-pointer font-medium">Account</h1>
                            </Link>
                            <hr className=" border-gray-400 mt-8 w-40" />
                        </div>
                       
                        <div className="container mx-auto px-4 pb-5">  
                            <Link href="../../profile/history">
                                <h1 className="cursor-pointer font-medium">History</h1>
                            </Link>
                            <hr className=" border-gray-400 mt-8" />
                        </div>
                        <div className="container mx-auto px-4">
                            <Link href="../../profile/myhouse">
                                <h1 className="cursor-pointer font-medium">My House</h1>
                            </Link>
                        </div>
                    </div>

                    {/* Main course */}
                    
                    <div class="flex flex-col justify-center h-full pt-10 pb-10">
                        {house.map((el, i) => (
                        <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                            <div class="p-3">
                                <div class="overflow-x-auto">
                                    
                                    <table class="table-auto w-full">
                                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                            <tr>
                                                <th class="p-2 whitespace-nowrap">
                                                    <div class="font-semibold text-left">Room Name</div>
                                                </th>
                                                <th class="p-2 whitespace-nowrap">
                                                    <div class="font-semibold text-left">Description</div>
                                                </th>
                                                <th class="p-2 whitespace-nowrap">
                                                    <div class="font-semibold text-center">Action</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-sm divide-y divide-gray-100">
                                            <tr>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="w-13 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                            {/* <img 
                                                            class="rounded-full" 
                                                            src={el.image} 
                                                            width="160"
                                                            height="50" 
                                                            /> */}
                                                        </div>
                                                        <div class="font-medium text-gray-800">{el.name}</div>
                                                    </div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap">
                                                    <div class="text-left">{el.description}</div>
                                                </td>

                                                <td class="p-2 flex justify-end ">
                                                    <Link href="/profile/editMyHouse">
                                                        <button class="w-20 bg-yellow-400 hover:bg-orange-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5">
                                                            <center><MdOutlineEdit size={20}/></center>
                                                        </button>
                                                    </Link>
                                                    <button class="w-20 bg-red-500 hover:bg-red-700 text-gray-800 font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleDelete}>
                                                        <center><GoTrashcan size={20}/></center>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>                         
                        </div>
                      ))}
                        {/* <Link> */}
                        <center><button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-full shadow mt-5">
                                    Add new house
                            </button></center>
                        {/* </Link> */}
                    </div>                                    
                </div>    
                                        
            </div>
            <Footer />  
        </div>  
                              
        </>
    )
}



export default MyHouse;
