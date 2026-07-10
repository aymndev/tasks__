import React from 'react'

import { MdAdminPanelSettings } from "react-icons/md";
export default function NavBar() {
  return (
    <div className='flex font-serif '>
        <div className='flex flex-row gap-5 '>
            <h1 className='bont-bold text-lg  '>Todoliste</h1>
            <p className='flex border-1 border-orange-900/50  pl-2 pt-1 pr-2 rounded-lg text-[12px] text-center text-orange-500 bg-orange-100'><MdAdminPanelSettings />Admin</p>
        </div>
      
    </div>
  )
}
