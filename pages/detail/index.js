import {MdPeopleAlt} from 'react-icons/md'
import {BiDoorOpen} from 'react-icons/bi'
import {MdOutlineKingBed} from 'react-icons/md'
import Image1 from '../../assets/feat1.png'
import Image2 from '../../assets/bloom-man-giving-online-support-via-laptop.png'
import Image3 from '../../assets/bloom-woman-with-sprayer-and-detergents-cleaning-up.png'
import Image4 from '../../assets/bloom-woman-leads-webinar-on-computer-via-online.png'
import Image from 'next/image' 

function DetailRoom() {
    return (
        <>
            <h1>Navbar</h1>
            <div className="h-vh pt-20 bg-gray-100">
                <div className="container mx-auto ">
                    {/* Room name */}
                    <div className="roomName mb-5">
                        <h1 className="font-bold">Ameris hills</h1>
                    </div>
                    {/* Category */}
                    <div className="category flex ">
                        <div className="bg-teal-300 p-3 rounded mr-5">
                            Solo traveling
                        </div>
                        <div className="bg-teal-300 p-3 rounded mr-5">
                            Couple
                        </div>
                        <div className="bg-teal-300 p-3 rounded mr-5">
                            Tourist
                        </div>
                        <div className="bg-teal-300 p-3 rounded mr-5">
                            City center
                        </div>
                    </div>
                    {/* Preview image */}
                    <div className="previewImage flex">
                        <img
                            className="
                            rounded 
                            block
                            pt-14"                          
                            src="https://www.gannett-cdn.com/-mm-/c6ce345dd3cc67c30388965835e2347ef87cfcc7/c=0-366-2700-1885/local/-/media/2020/03/03/USATODAY/usatsports/MotleyFool-TMOT-b9d6657b-hotel-room.jpg?width=2700&height=1519&fit=crop&format=pjpg&auto=webp"
                            width={726}
                                                    />
                        <div className="flex flex-col ml-14">
                                <img
                                    className="
                                    rounded 
                                    block
                                    pt-14
                                    w-80"                          
                                    src="http://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up.jpg"
                                />
                                 <img
                                    className="
                                    rounded 
                                    block
                                    pt-14
                                    w-80"                          
                                    src="https://i.pinimg.com/originals/45/a2/60/45a260724f7ebf164b893eed1128d38d.jpg"
                                />
                        </div>
                        <div className="flex flex-col ml-8">
                                <img
                                    className="
                                    rounded 
                                    block
                                    pt-14
                                    w-80"                          
                                    src="http://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up.jpg"
                                />
                                 <img
                                    className="
                                    rounded 
                                    block
                                    pt-14
                                    w-80"                          
                                    src="https://i.pinimg.com/originals/45/a2/60/45a260724f7ebf164b893eed1128d38d.jpg"
                                />
                        </div>
                    </div>
                    {/* Detail room */}
                    <div className="mainCouse mt-20">
                        <h1 className="font-bold mb-5">Detail's</h1>
                        {/* Fiture */}
                        <div className="flex">
                            <div className="flex flex-col bg-neutral-200 p-5 rounded mr-5">
                                <MdPeopleAlt 
                                    size={30}
                                />
                                <h1 className="mt-5">2 Poeple</h1>
                            </div>
                            <div className="flex flex-col bg-neutral-200 p-5 rounded mr-5">
                                <BiDoorOpen 
                                    size={30}
                                />
                                <h1 className="mt-5">1 Bathroom</h1>
                            </div>
                            <div className="flex flex-col bg-neutral-200 p-5 rounded mr-5">
                                <MdOutlineKingBed 
                                    size={30}
                                />
                                <h1 className="mt-5">1 Queen bed</h1>
                            </div>
                        </div>
                        {/* Description  */}
                        <div className="description mt-10">
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        {/* DLC */}
                        <h1 className="font-bold mt-20 mb-5">Room Ameris Hills</h1>
                        <div className="flex">
                            <div className="flex flex-col border">
                                <div className="flex bg-emerald-100 p-7 rounded mr-5 w-full">
                                    <Image 
                                        src={Image1}
                                        width={100}
                                        height={100}
                                    />
                                    <div className="flex flex-col">
                                    <h1 className="mt-5 text-gray-400 ">Feature #1</h1>
                                    <h1 className="text-emerald-600 pt-3 font-semibold">Electronic Check-in <br/>and Check out</h1>
                                    </div>    
                                </div>
                                <div className="flex bg-gray-200 p-7 rounded mr-5 mt-5 w-full">
                                    <Image 
                                        src={Image2}
                                        width={100}
                                        height={100}
                                    />
                                    <div className="flex flex-col">
                                    <h1 className="mt-5 text-gray-400 ">Feature #2</h1>
                                    <h1 className="text-black-600 pt-3 font-semibold">Workspace Ready</h1>
                                    </div>    
                                </div>
                            </div>
                            <div className="flex flex-col ml-10">
                                <div className="flex bg-gray-200 p-7 rounded mr-5 w-full border ">
                                    <Image 
                                        src={Image3}
                                        width={100}
                                        height={100}
                                    />
                                    <div className="flex flex-col">
                                    <h1 className="mt-5 text-gray-400 ">Feature #1</h1>
                                    <h1 className="text-black-600 pt-3 font-semibold">Free housekeeping <br/>Services</h1>
                                    </div>    
                                </div>
                                <div className="flex bg-gray-200 p-7 rounded mr-5 mt-5 w-full">
                                    <Image 
                                        src={Image4}
                                        width={100}
                                        height={100}
                                    />
                                    <div className="flex flex-col">
                                    <h1 className="mt-5 text-gray-400 ">Feature #2</h1>
                                    <h1 className="text-black-600 pt-3 font-semibold">24/7 Contact Support</h1>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Time check in */}
                    <div className="timeCheck flex mt-10">
                        <div className="flex">
                            <div className="border border-gray-400 rounded mx-auto flex flex-col">
                                <h1 className="mt-5 ml-5">Check-In Time</h1>
                                <h1 className="mt-4 ml-5">2PM</h1>
                            </div>
                                
                        </div>
                        
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default DetailRoom
