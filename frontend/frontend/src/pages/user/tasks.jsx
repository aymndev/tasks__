
import NavBar from '../../components/NavBar'
import { useState } from 'react';

export default function tasks() {
  const [category,setCategory]=useState('work')
  const today = new Date()
  const option = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",

  };
  const formattedDate = today.toLocaleDateString("en-GB", option);


  return (

    <div className='flex flex-col min-h-screen'>

      <NavBar />


      <div className='flex pl-[20rem] flex-col flex-1 bg-blue-100 h-full w-full p-10 '>
        <h1 className='tracking-wide text-4xl  md:text-5xl'>Today's Liste </h1>
        <h1 className=' flex text-lg  pt-4 ] font-medium'>{formattedDate}</h1>
        <div className='flex-1 bg-red-500 w-[50%] h-full'>

          <input
            className='bg-white p-3 pr-[20rem] pl-3 focus:outline-none'
            type='text'


          />
          <div className='mt-8 bg-white rounded-xl shadow-md overflow-hidden'>          
            
            <select >
              
                <option value="Work" className="text-left p-4">Work</option>
                <option value="Personal" className="text-left p-4">Personal</option>
                <option value="Health" className="text-left p-4">Health</option>
                <option value="Creative" className="text-left p-4">Creative</option>
                <option value="Learning" className="text-left p-4">Learning</option>
              
            </select>

      
          </div>





        </div>
      </div>

    </div>



  )
}
