import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar'
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";
import { completeTask } from '../../services/task';
import { getTask } from '../../services/task';
import { searchTask } from '../../services/task';
import { createTask } from '../../services/task';

export default function tasks() {
  const [category, setCategory] = useState('Work');
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [search, setSearch] = useState("");
  const today = new Date()
  const option = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",

  };
  async function handleTCreateTask() {
    if (!newTask.trim()) return
    try {
      const response = await createTask({
        title: newTask,
        category: category
      });
      console.log("the task created ", response.data);
      setTask(prev => [...prev, response.data]);
      setNewTask("");



    } catch (err) {
      console.error("Error creating task:", err);

    }
  }
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

  function toggleTask(id) {
    setTask(
      task.map((item) =>
        item.task_id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  }

  async function handleComplete(id) {
    console.log("Clicked task:", id);
    setTask((prev) =>
      prev.map((item) =>
        item.task_id === id
          ? { ...item, completed: true }
          : item
      )
    );

    try {
      await completeTask(id);

    } catch (err) {
      console.log(err);
    }
  }
  const handleSearch = async () => {
    try {
      const res = await searchTask(search);
      setTask(res.data);


    } catch (err) {
      console.log(err)

    }
  }

  return (

    <div className='flex flex-col  min-h-screen'>

      <NavBar />


      <div className='flex pl-[20rem] flex-col flex-1 bg-green-900 text-white min-h-screen  w-full p-10  '>
        <h1 className='tracking-wide text-4xl  md:text-5xl'>Today's Liste </h1>
        <h1 className=' flex text-lg  pt-4 mb-[4rem] font-medium'>{formattedDate}</h1>
        <div className=' bg-white shadow-xl  w-[80%] mt-5 min-h-[10rem] rounded-xl '>

          <input
            className='bg-white text-black p-3 pr-[20rem] w-full pl-3 shadow-xl rounded-lg focus:outline-none'
            type='text'
            placeholder='Add a new task...'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}


          />
          <div className=' flex justify-between  mt-8   rounded-xl  overflow-hidden'>
            <div className='text-black'>



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
              <button className='mr-7 hover:bg-gray-900 hover:text-white bg-gray-700 p-1 rounded-lg pr-5  pl-5' onClick={handleTCreateTask}>Add</button>

            </div>




          </div>
        </div>
        <div className=' flex flex-col gap-5 mt-[8rem]  text-black rounded-lg   shadow-xl'>
          {task.map((item) => (

            <div className='flex flex-row gap-[12rem] w-[68rem] ' key={item.task_id}>

              <div className='flex  bg-white shadow-xl p-3  mt-5 rounded-xl w-[70rem]  flex-col '>
                <div className='flex flex-row gap-3'>
                  {item.completed ? (
                    <FaCheckCircle onClick={() => handleComplete(item.task_id)}
                      className="text-green-600  text-xl text-sm h-7 ml-1 mr-1" />

                  ) : (
                    <FaRegCircle
                      onClick={() => handleComplete(item.task_id)}
                      className="text-gray-500 text-xl text-sm h-7 ml-1 mr-1" />

                  )

                  }
                  <p
                    className={`text-xl text-black ${item.completed
                      ? "line-through text-gray-400"
                      : "text-black"
                      }`}

                  >{item.title}</p>
                </div>
                <div className='flex flex-row gap-5 justify-between mt-2'>
                  <button
                    className={`border rounded-lg pl-3 pr-3 ${item.category === "Work"
                      ? "bg-pink-100 text-pink-600"
                      : item.category === "Personal"
                        ? "bg-green-100 text-green-600"
                        : item.category === "Health"
                          ? "bg-red-100 text-red-600"
                          : item.category === "Creative"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-yellow-100 text-yellow-600"
                      }`}


                  >{item.category}</button>
                  <p className='text-sm text-gray-500'

                  >
                    {new Date(item.created_at).toDateString()}</p>


                </div>


              </div>




            </div>
          ))}
        </div>






      </div>

    </div>



  )
}
