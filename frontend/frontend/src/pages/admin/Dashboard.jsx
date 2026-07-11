import { LuUsersRound } from "react-icons/lu";
import { FaUserCheck } from "react-icons/fa";
import { FaUserXmark } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { getStatistics } from "../../services/auth";
import NavBare from "../../components/NavBar"
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const navigate =useNavigate();
  const [stats, setState] = useState({
    totalUsers: 0,
    pandingUsers: 0,
    activeUsers: 0,
  })
  useEffect(()=>{
    async function loadState() {
      const response= await getStatistics();
      setState(response.data)
      
    }
    loadState();
  },[]);
  return (
    <div className='flex flex-col font-serif w-full p-[9rem]  bg-green-100 h-screen   '>
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
            className='font-serif bg-green-600 rounded-lg p-2 '
            onClick={()=>navigate('/admin/add-user')}
            >
              Add user
              </button>

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
      <div>

        <div>

        </div>
        <h1>info</h1>

      </div>



    </div>
  )
}
