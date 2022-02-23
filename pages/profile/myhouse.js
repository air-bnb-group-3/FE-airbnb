import {MdOutlineEdit} from 'react-icons/md'
import {GoTrashcan} from 'react-icons/go'

function MyHouse() {
    return (
        <>
        <h1>Navbar</h1>
        <div className="h-screen pt-20 bg-gray-100">
            <div className="container mx-auto ">
                <h1 class="text-center">History Payment</h1>
            </div>
            <div className="max-w-6xl mx-5 pt-20 xl:mx-auto">  
                <div className="grid grid-cols-2 gap-2 shadow-lg">
                    <div className="left">
                        {/* Menu left */}
                        <div className="container mx-auto px-4 pb-5">
                            <h1>Account</h1>
                            <hr className=" border-gray-400 mt-8" />
                        </div>
                       
                        <div className="container mx-auto px-4 pb-5">  
                            <h1>History</h1>
                            <hr className=" border-gray-400 mt-8" />
                        </div>
                        <div className="container mx-auto px-4">
                            <h1>My House</h1>
                        </div>
                    </div>

                    {/* Main course */}
                    <div class="flex flex-col justify-center h-full">
 
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
                                            <img 
                                            class="rounded-full" 
                                            src="https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80" 
                                            width="60"
                                            height="100" 
                                            />
                                        </div>
                                        <div class="font-medium text-gray-800">Waifumu mas</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">Lorem ipsum</div>
                                </td>

                                <td class="p-2 flex justify-between">
                                    <button class="w-20 bg-yellow-400 hover:bg-orange-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                        <center><MdOutlineEdit size={20}/></center>
                                    </button>
                                    <button class="w-20 bg-red-500 hover:bg-red-700 text-gray-800 font-bold py-2 px-4 border border-blue-700 rounded">
                                        <center><GoTrashcan size={20}/></center>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-13 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                            <img 
                                                class="rounded-full" 
                                                src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80" 
                                                width="60" 
                                                height="100" 
                                            />
                                        </div>
                                        <div class="font-medium text-gray-800">Paha for life</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">Ipsum lorem</div>
                                </td>
                                <td class="p-2 flex justify-between">
                                    <button class="w-20 bg-yellow-400 hover:bg-orange-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                        <center><MdOutlineEdit size={20}/></center>
                                    </button>
                                    <button class="w-20 bg-red-500 hover:bg-red-700 text-gray-800 font-bold py-2 px-4 border border-blue-700 rounded">
                                        <center><GoTrashcan size={20}/></center>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-13 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                            <img 
                                                class="rounded-full" 
                                                src="https://upload.wikimedia.org/wikipedia/commons/4/40/Living_Room.jpg" 
                                                width="60" 
                                                height="100" 
                                            />
                                        </div>
                                        <div class="font-medium text-gray-800">House of Wibu</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">Simply dummy</div>
                                </td>
                                <td class="p-2 flex justify-between">
                                    <button class="w-20 bg-yellow-400 hover:bg-orange-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                        <center><MdOutlineEdit size={20}/></center>
                                    </button>
                                    <button class="w-20 bg-red-500 hover:bg-red-700 text-gray-800 font-bold py-2 px-4 border border-blue-700 rounded">
                                        <center><GoTrashcan size={20}/></center>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-13 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                            <img 
                                                class="rounded-full" 
                                                src="https://i.pinimg.com/originals/2b/8f/b4/2b8fb47cc84f5af2ee797bd3d98512c1.jpg" 
                                                width="60"
                                                height="100" 
                                             />
                                            </div>
                                        <div class="font-medium text-gray-800">Best cosu</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">Dummy simply</div>
                                </td>
                                <td class="p-2 flex justify-between">
                                    <button class="w-20 bg-yellow-400 hover:bg-orange-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                        <center><MdOutlineEdit size={20}/></center>
                                    </button>
                                    <button class="w-20 bg-red-500 hover:bg-red-700 text-gray-800 font-bold py-2 px-4 border border-blue-700 rounded">
                                        <center><GoTrashcan size={20}/></center>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-13 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                            <img 
                                            class="rounded-full" 
                                            src="https://phri.d-hots.com/images/hotels/df5ae828b0d2f5a4b92f62808348a2be-20210810110803.jpg" 
                                            width="60" 
                                            height="100" 
                                            />
                                        </div>
                                        <div class="font-medium text-gray-800">Fansmu mas</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">typesetting industry</div>
                                </td>
                                <td class="p-2 flex justify-between">
                                    <button class="w-20 bg-yellow-400 hover:bg-orange-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                        <center><MdOutlineEdit size={20}/></center>
                                    </button>
                                    <button class="w-20 bg-red-500 hover:bg-red-700 text-gray-800 font-bold py-2 px-4 border border-blue-700 rounded">
                                        <center><GoTrashcan size={20}/></center>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
                    
                  
                </div>                
               
            </div>
        </div>
           
        </>
    )
}

export default MyHouse
