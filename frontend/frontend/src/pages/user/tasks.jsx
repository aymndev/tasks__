import React from 'react'
import NavBar from '../../components/NavBar'

export default function tasks() {
  const today = new Date()
  const option = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",

  };
  const formattedDate=today.toLocaleDateString('en-CB',option);


  return (

    <div className='flex flex-col min-h-screen'>

      <NavBar />


      <div className='flex pl-[20rem] flex-col flex-1 bg-blue-100 h-full w-full p-10 '>
        <h1 className='tracking-wide text-4xl  md:text-5xl'>Today's Liste </h1>
        <h1 className=' flex text-lg  pt-4 ] font-medium'>{formattedDate}</h1>
      </div>
      <div>
        
      </div>
    </div>



  )
}
