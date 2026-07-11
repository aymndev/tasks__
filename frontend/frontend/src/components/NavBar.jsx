import { IoLogOutOutline } from "react-icons/io5";

import { MdAdminPanelSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate()
  function handlingLogout() {
    localStorage.removeItem("token");
    navigate("/login")
  }
  return (
    <div className='flex font-serif bg-orange-100   border-b-1 pt-5 pb-5 pr-10 pl-10 '>
      <div className='flex flex-row gap-5 justify-between w-full'>
        <div className="flex flex-row gap-5">
          <h1 className='bonjustify-between w-fullt-bold text-lg  '>Todoliste</h1>
          <p className='flex border-1 border-orange-900/50  pl-2 pt-1 pr-2 rounded-lg text-[12px] text-center text-orange-500 bg-orange-100'><MdAdminPanelSettings className="h-3 mr-1 mt-1 text-xl " />Admin</p>

        </div>
        <div>
          <button className="flex hover:border-b-1 border-balck text-gray-700 hover:text-black " onClick={handlingLogout} > <IoLogOutOutline className="h-4 mr-2  mt-1 text-xl " />Sing out</button>
        </div>

      </div>

    </div>
  )
}
