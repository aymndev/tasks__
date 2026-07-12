import { LuUsersRound } from "react-icons/lu";
import { FaUserCheck } from "react-icons/fa";
import { FaUserXmark } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { getStatistics } from "../../services/auth";
import NavBare from "../../components/NavBar"
import { useNavigate } from "react-router-dom";
import AddUserForm from "../../components/AddUserForm";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import AddUser from "./AddUser";


export default function Dashboard() {
  const [showForm, setShowForm] = useState(false);
  const [selected, setSelected] = useState('all');
  const navigate = useNavigate();
  const [stats, setState] = useState({
    totalUsers: 0,
    pandingUsers: 0,
    activeUsers: 0,
  })
  useEffect(() => {
    async function loadState() {
      const response = await getStatistics();
      setState(response.data)

    }
    loadState();
  }, []);
  return (
    <div className='flex flex-col font-serif w-full    bg-orange-100 h-screen   '>
      <div className="mb-9">
        <NavBare />
      </div>
      <div className='flex flex-col ml-[10rem] mr-[10rem] '>
        <div className='flex justify-between'>
          <div>
            <h1 className='font-bold text-3xl font-serif'>User management</h1>
            <p className='text-sm font-serif'>Oversee all registered accounts on the platform.</p>

          </div>

          <div className=''>
            <button
              className='flex font-serif bg-orange-800  rounded-lg text-white p-2 pr-6 '
              onClick={() => setShowForm(!showForm)}

            >
              <IoMdAdd className="h-6 mr-3" />Add user
            </button>
            {showForm && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/50  z-50 ">
                <AddUserForm
                  closeForm={() => setShowForm(false)}

                />
              </div>
            )}

          </div>

        </div>

        <div className='flex gap-5   justify-between mt-[5rem]'>
          <div className='border-1 border-gray-900/50 p-5 rounded-lg w-[10rem] bg-gray-100'>
            <p className=' flex ml-1 text-sm font-bold'><LuUsersRound className="h-5 mr-2 text-xl " />Totale users</p>
            <h1 className='ml-1 text-xl mt-5'>{stats.totalUsers}</h1>


          </div>
          <div className='border-1 border-gray-900/50 p-5 rounded-lg w-[10rem] bg-gray-100'>
            <p className=' flex ml-1 text-sm font-bold text-green-500'><FaUserCheck className="h-5 mr-2 text-xl " />Active</p>
            <h1 className='ml-1 text-green-500 text-xl mt-5'>{stats.activeUsers}</h1>


          </div>
          <div className='border-1 border-gray-900/50 p-5 rounded-lg w-[10rem] bg-gray-100 '>
            <p className='flex ml-1 text-sm font-bold text-red-500'><FaUserXmark className="h-5 mr-2 text-xl " />Suspended</p>
            <h1 className='ml-1 text-red-500 text-xl mt-5'>{stats.pandingUsers}</h1>


          </div>
          <div className='border-1 border-gray-900/50 p-5 rounded-lg w-[10rem] bg-gray-100'>
            <p className='flex ml-1 text-sm font-bold text-orange-500'><GoGraph className="h-5 mr-2 text-xl " />Total tasks</p>

            <h1 className='ml-1 text-orange-500 text-xl mt-5'>41</h1>


          </div>

        </div>


      </div>
      <div className=" flex flex-row justify-center pt-25  gap-10">

        <div className="flex   relative w-72">
          <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl"/>
          
          <input
          type="text"
            placeholder="Find..."
            className="w-full bg-white p-2 rounded-lg border pl-10 focus:outline-none focus:ring-2 focus:ring-orange-500"

          />



        </div>
        <div className="flex w-58  rouded bg-gray-300 rounded-lg  gap-5">
          <button

            onClick={() => setSelected('all')}
            className={`rounded-lg p-1 pl-2  pr-2 ${selected ==="all"
                ? " bg-gray-100 text-black transition-all duration-200"
                : "hover:bg-gray-100  hover:text-black hover:text-xl  transition-all duration-200"
              }`}

          >
            All
          </button>
          <button
            onClick={() => setSelected('Active')}
            className={`rounded-lg p-1 pl-2 pr-2 ${selected === "Active"
                ? " bg-gray-100 text-black  transition-all duration-200"
                : "hover:bg-gray-100  hover:text-black hover:text-xl  transition-all duration-200"
              }`}


          >
            Active
          </button>
          <button
            onClick={() => setSelected('Suspended')}
            className={`rounded-lg p-1 pl-2 pr-2 ${selected ==="Suspended"
                ? " bg-gray-100 text-black  transition-all duration-200"
                : "hover:bg-gray-100  hover:text-black hover:text-xl  transition-all duration-200"
              }`}
          >
            Suspended
          </button>
        </div>


      </div>



    </div>
  )
}
