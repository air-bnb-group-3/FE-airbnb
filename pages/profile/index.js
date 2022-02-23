function Profile() {
    return (
        <>
        <h1>Navbar</h1>
        <div className="h-screen pt-20 bg-gray-100">
            <div className="container mx-auto ">
                <h1 class="text-center">Account Setting</h1>
            </div>
            <div className="max-w-6xl mx-5 pt-20 xl:mx-auto">  
                <div className="grid grid-cols-4 gap-4 shadow-lg">
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
                    <div className="center flex justify-center flex-col mx-auto py-6">
                        <div class="mb-3 xl:w-96 pb-3">
                            <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700"
                            >Username</label>
                            <input
                                type="text"
                                class="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                                id="exampleFormControlInput1"
                                placeholder="User1"
                            />
                        </div>
                        <div class="mb-3 xl:w-96 pb-3">
                            <label for="examplePassword0" class="form-label inline-block mb-2 text-gray-700"
                                >Password input</label
                                >
                                <input
                                type="password"
                                class="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                                id="examplePassword0"
                                placeholder="***********"
                            />
                        </div>
                        <div class="mb-3 xl:w-96">
                            <label for="exampleEmail0" class="form-label inline-block mb-2 text-gray-700"
                            >Email input</label
                            >
                            <input
                                type="email"
                                class="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                                id="exampleEmail0"
                                placeholder="User1@mail.com"
                            />
                        </div>

                        <div class="mb-3 xl:w-96 pt-10 pb-10">
                            <p class="text-blue-600">Delete Your Account</p><br/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                        <div className="buttonAction flex justify-between">
                            <button class="w-40 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow  ">
                            Back
                            </button>
                            <button class="w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                Save
                            </button>                         
                        </div>
                    </div>
                    
                    {/* Avatar */}
                    <div className="right flex flex-col mx-auto py-6 col-span-2">
                        <img 
                            src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                            width={137}
                            height={129}
                        />
                        <div className="buttonUpload pt-5">
                            <button class="w-23 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                Upload Picture
                            </button>
                        </div>
                         
                    </div>
                </div>                
               
            </div>
        </div>
           
        </>
    )
}

export default Profile
