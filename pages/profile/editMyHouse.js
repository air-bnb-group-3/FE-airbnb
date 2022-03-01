import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link"
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import axios from "axios";
import swal from 'sweetalert';

function EditMyHouse() {
    const router = useRouter();
    const [house, setHouse] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [person, setPerson] = useState(["1","2","3","4","5"]);
    const [bath, setBath] = useState(["1","2"]);
    const [bed, setBed] = useState(["Single Bed","Twin Bed","Queen Bed"]);
    const [createObjectURL, setCreateObjectURL] = useState(null);

    const [token, setToken] = useState("");
    const {id} = router.query;
    
    const Add = person.map(Add => Add)
    const Add2 = bath.map(Add2 => Add2)
    const Add3 = bed.map(Add3 => Add3)

    const handlePersonChange = (e) => { 
        setPerson(person[e.target.value]) 
    }
    const handleBathChange = (e) => { 
        setBath(bath[e.target.value]) 
    }
    const handleBedChange = (e) => { 
        setBed(bed[e.target.value]) 
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        axios
          .get(`http://18.136.193.63:8081/rooms/${id}`, config)
          .then(({ data }) => {
            setHouse(data.data);
            setImage(data.data.Images[0].image)
            console.log(data.data);
          })
          .catch((err) => {
            console.log(err, 'error');
          });
      }, []);
    
      function handleEdit() {
        const formData = new FormData();
        formData.append('category_id', 1);
        formData.append('name', name);
        formData.append('description', description);
        formData.append('address', address);
        formData.append('latitude', parseInt(latitude));
        formData.append('longitude', parseInt(longitude));
        formData.append('price', parseInt(price));
        formData.append('total_person', parseInt(person));
        formData.append('total_rooms', parseInt(bath));
        formData.append('size_bed', bed);
        formData.append('files', image);
        const token = localStorage.getItem("token")
        const config = {
          headers: { Authorization: `Bearer ${token}` },
          'Content-Type': 'multipart/form-data',
        };
        swal({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to recover this imaginary file!',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
          }).then((willEdit) => {
            if (willEdit) {
                axios
                .put('http://18.136.193.63:8081/rooms/44',formData, config)
                .then(({ data }) => {
                  console.log(data);
                })
                .catch((err) => {
                  console.log(err, 'error');
                });
              swal('Success edit data', {
                icon: 'success',
              });
            } else {
              swal('Your imaginary file is safe!');
            }
          });       
      }

      function handleDelete() {
        const token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjp0cnVlLCJleHAiOjE2NDYxMzI1MDUsImlkIjo0Miwicm9sZXMiOmZhbHNlfQ.8TTVJq2NioHG1lZOj1jWRDKds_v0sh44yL8EUiT0AyY';
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        swal({
          title: 'Are you sure?',
          text: 'Once deleted, you will not be able to recover this account!',
          icon: 'warning',
          buttons: true,
          dangerMode: true,
        }).then((willEdit) => {
          if (willEdit) {
            axios
              .delete('http://18.136.193.63:8081/rooms/1', config)
              .then(({ data }) => {
                console.log(data);
              })
              .catch((err) => {
                console.log(err, 'error');
              });
            swal('Success delete data', {
              icon: 'success',
            });
          } else {
            swal('Abort the mission');
          }
        });
      }  
    
      const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
          const i = event.target.files[0];
    
          setImage(i);
          setCreateObjectURL(URL.createObjectURL(i));
        }
      };

   
    return (
        <>
        <Navbar />
        
        <div className="h-auto pt-20 bg-gray-100">
            <div className="container mx-auto ">
                <h1 class="text-center font-bold text-2xl">Edit my house</h1>
            </div>
            <div className="max-w-6xl mx-5 pt-10 xl:mx-auto mb-10">  
                <div className="grid grid-cols-4 gap-4 shadow-lg">
                    <div className="left ml-10 mt-10">
                        {/* Menu left */}
                        <div className="container mx-auto px-4 pb-5">
                            <Link href="../../profile">
                                <h1 className="cursor-pointer font-medium">Account</h1> 
                            </Link>
                            <hr className=" border-gray-400 mt-8 " />
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
                    <div className="flex justify-center flex-col mx-auto py-6 ml-10 mt-3">
                        <div class="mb-3 xl:w-96 pb-3">
                            <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700"
                            >House name</label>
                            <input
                                type="text"
                                class="
                                    appearance-none
                                    form-control
                                    block
                                    w-full
                                    px-4
                                    py-3
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-gray-200 
                                    bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                                placeholder={house.name}
                                onChange={(e) => setName(e.target.value)}
                                
                            />
                            
                        </div>
                        <div class="mb-3 xl:w-96 pb-3">
                        <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700"
                            >Description</label>
                            <textarea 
                                class="
                                w-full
                                h-56 
                                appearance-none
                                form-control
                                block
                                w-full
                                px-4
                                py-3
                                text-base
                                font-normal
                                text-gray-700
                                bg-gray-200  
                                bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder={house.description}
                                onChange={(e) => setDescription(e.target.value)}
                            >
                            </textarea>
                        </div>
                        <div class="mb-3 xl:w-96 pb-3">
                        <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700"
                            >Address</label>
                            <input
                                type="text"
                                class="
                                    appearance-none
                                    form-control
                                    block
                                    w-full
                                    px-4
                                    py-3
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-gray-200  
                                    bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                                placeholder={house.address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full md:w-2/4 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-person">
                                latitude
                                </label>
                                <input
                                    type="text"
                                    class="
                                        appearance-none
                                        form-control
                                        block
                                        w-full
                                        px-4
                                        py-3
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-gray-200  
                                        bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                    "
                                    placeholder={house.latitude}
                                    onChange={(e) => setLatitude(e.target.value)}
                                />
                            </div>
                            <div class="w-full md:w-2/4 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-person">
                                    longitude
                                </label>
                                    <input
                                        type="text"
                                        class="
                                            appearance-none
                                            form-control
                                            block
                                            w-full
                                            px-4
                                            py-3
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-gray-200  
                                            bg-clip-padding
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                        "
                                        placeholder={house.longitude}
                                        onChange={(e) => setLongitude(e.target.value)}
                                    />
                            </div>   
                        </div>
                        <div class="mb-3 xl:w-96 pb-3">
                        <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700"
                            >Price</label>
                            <input
                                type="text"
                                class="
                                    appearance-none
                                    form-control
                                    block
                                    w-full
                                    px-4
                                    py-3
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-gray-200 
                                    bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                                placeholder={house.price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-person">
                                    Person
                                </label>
                                    <div class="relative">
                                        <select class="
                                                block 
                                                appearance-none 
                                                w-full 
                                                bg-gray-200 
                                                border 
                                                border-gray-
                                                200 text-gray-700 
                                                py-3 px-4 pr-8 
                                                rounded 
                                                leading-tight 
                                                focus:outline-none 
                                                focus:bg-white 
                                                focus:border-gray-500"
                                                >
                                                     onChange={e => handlePersonChange(e)} 
                                            {
                                                Add.map((el, i) => <option i={i} value={i}>{el} </option>)
                                            }
                                        </select>
                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                            </div>
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-bathroom">
                                    Bathroom
                                </label>
                                    <div class="relative">
                                        <select class="
                                                block 
                                                appearance-none 
                                                w-full 
                                                bg-gray-200 
                                                border 
                                                border-gray-
                                                200 text-gray-700 
                                                py-3 px-4 pr-8 
                                                rounded 
                                                leading-tight 
                                                focus:outline-none 
                                                focus:bg-white 
                                                focus:border-gray-500"
                                               
                                                >
                                                     onChange={e => handleBathChange(e)} 
                                            {
                                                Add2.map((el, i) => <option i={i} value={i}>{el} </option>)
                                            }    
                                        </select>
                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-bed">
                                    Bed Cover
                                </label>
                                    <div class="relative">
                                        <select class="
                                                block 
                                                appearance-none 
                                                w-full 
                                                bg-gray-200 
                                                border 
                                                border-gray-
                                                200 text-gray-700 
                                                py-3 px-4 pr-8 
                                                rounded 
                                                leading-tight 
                                                focus:outline-none 
                                                focus:bg-white 
                                                focus:border-gray-500" 
                                                
                                                >
                                                    onChange={e => handleBedChange(e)}
                                            {
                                                Add3.map((el, i) => <option i={i} value={i}>{el} </option>)
                                            }
                                        </select>
                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                    </div>

                        <div class="mb-3 xl:w-96 pt-10 pb-3">
                            <p class="text-blue-600 cursor-pointer" onClick={handleDelete}>Delete Your House from List</p><br/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                        <div className="buttonAction flex justify-between">
                            <Link href="/profile/myhouse">
                                <button class="w-40 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                Back
                                </button>
                            </Link>
                            <button class="w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleEdit}>
                                Save
                            </button>                         
                        </div>
                    </div>
                    
                    {/* Avatar */}
                    <div className="right flex flex-col mx-auto py-6 col-span-2 mr-20 mt-5">
                    <input type="file" name="myImage" onChange={uploadToClient} />
                    {createObjectURL ? 
                    <img src={createObjectURL} width={255} height={170} />
                    : 
                     <img src={image} width={255} height={170} />
                    }       
                    </div>
                </div>                
               
            </div>
            <Footer/>
        </div>
           
        </>
    )
}

export default EditMyHouse
