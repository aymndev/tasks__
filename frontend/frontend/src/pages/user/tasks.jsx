import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar'

import { getTask } from '../../services/task';

export default function tasks() {
  const [category, setCategory] = useState('work');
  const [task, setTask] = useState([]);
  const today = new Date()
  const option = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",

  };
  const formattedDate = today.toLocaleDateString("en-GB", option);
  useEffect(() => {
    async function fetchTasks() {
      try {


        const response = await getTask();
        console.log(response.data);
        setTask(response.data);
      } catch (err) {
        console.error(err);

      }
      


    }
    fetchTasks();
  }, []);


  return (

    <div className='flex flex-col min-h-screen'>

      <NavBar />


      <div className='flex pl-[20rem] flex-col flex-1 bg-blue-100 h-full w-full p-10 '>
        <h1 className='tracking-wide text-4xl  md:text-5xl'>Today's Liste </h1>
        <h1 className=' flex text-lg  pt-4 mb-[4rem] font-medium'>{formattedDate}</h1>
        <div className=' bg-white shadow-xl  rounded-t-lg w-[80%] h-[9rem] rounded-xl'>

          <input
            className='bg-white text-black p-3 pr-[20rem] w-full pl-3 border-1 rounded-xl focus:outline-none'
            type='text'
            placeholder='Add a new task...'


          />
          <div className=' flex justify-between mt-8  h-full rounded-xl  overflow-hidden'>
            <div>



              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
            </div>
            <div>
              <button className='mr-7 hover:bg-gray-600 hover:text-white bg-gray-300 p-1 rounded-lg pr-5  pl-5'>Add</button>

            </div>




          </div>
          <div className='bg-white text-black'>
            {task.map((item)=>(
              <div key={item.task_id}>
                <p>{item.title}</p>

              </div>
            ))}
          </div>





        </div>
      </div>

    </div>



  )
}
