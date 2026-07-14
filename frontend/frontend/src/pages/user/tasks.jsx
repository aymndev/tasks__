
import NavBar from '../../components/NavBar'
import { useState } from 'react';

export default function tasks() {
  const [category, setCategory] = useState('work');
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
        <div className=' bg-white shadow-xl rounded-t-lg w-[70%] h-[9rem] rounded-xl'>

          <input
            className='bg-white text-black p-3 pr-[20rem] w-full pl-3 border-1 rounded-xl focus:outline-none'
            type='text'
            placeholder='Add a new task...'


          />
          <div className='mt-8  h-full rounded-xl  overflow-hidden'>

            <select
              value={category}
              onClick={(e) => setCategory(e.target.value)}
              className={`border mr-5 ml-5 p-2 rounded-md ${category === "Work"
                  ? "bg-pink-100 text-pink-600"
                  : category === "Personal"
                    ? "bg-green-100 text-green-600"
                    : category === "Health"
                      ? "bg-red-100 text-red-600"
                      : category === "Creative"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-yellow-100 text-yellow-600"
                }`}

            >

              <option value="Work" >Work</option>
              <option value="Personal" >Personal</option>
              <option value="Health" >Health</option>
              <option value="Creative" >Creative</option>
              <option value="Learning" >Learning</option>

            </select>


            <select className='rounded-lg border-1 p-2'>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

            <button className='ml-[40rem] bg-gray-300 p-1 rounded-lg pr-3 pl-3'>Add</button>


          </div>





        </div>
      </div>

    </div>



  )
}
