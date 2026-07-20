import { IoLogOutOutline } from "react-icons/io5";

import { MdAdminPanelSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaHouseUser } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";

export default function NavBar() {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user)
  const navigate = useNavigate();
  function handlingLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login")
  }
  return (
    <div className={`flex font-serif  pt-5 pb-5 pr-10 pl-10 ${
      user?.role === "admin"
      ?" bg-gradient-to-r from-orange-900 to-orange-200"
      :"bg-gradient-to-r from-green-800  to-green-600 "
    } `}>
      <div className='flex flex-row gap-5 text-white justify-between w-full'>
        <div className="flex flex-row gap-5">
          <h1 className='bonjustify-between w-fullt-bold text-lg  '>Todoliste</h1>
          <p
            className={`flex border-1 border-orange-900/50  pl-2 pt-1 pr-2 rounded-lg text-[12px] text-center  bg-orange-100' ${user?.role === "admin"
                ? "bg-white text-orange-500 border-orange-900/50"
                : "bg-white text-green-600 border-green-900/50"
              }
          `}>
            {user?.role === "admin" ? (

              <MdAdminPanelSettings className="h-3 mr-1 mt-1 text-xl " />
            ) : (
              <FaHouseUser className="h-3 mr-1 mt-[3px]  " />

            )}


            {user?.role}
          </p>

        </div>
        <div className="flex gap-5">
          <p className=" flex border-1 border-gray-400  border-l-0 text-sm mt-[3px] rounded-xl pl- pr-5 text-gray-600"><CiUser className="h-6 items-center mr-3 text-sm text-white bg-green-500 rounded-xl w-7"/>{user?.username}</p>
          <button className="flex hover:border-b-1 border-balck text-gray-900 hover:text-black " onClick={handlingLogout} > <IoLogOutOutline className="h-4 mr-2  mt-1 text-xl " />Sing out</button>
        </div>

      </div>

    </div>
  )
}
