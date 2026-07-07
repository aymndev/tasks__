import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

export default function login() {
    return (
        <div className='flex h-screen '>

            <div className='flex flex-col gap-[18rem] w-1/2 bg-green-950 justify-center items-center'>
                <div className=' flex w-full ml-[9rem]'>
                    <p className='text-sm text-green-200 font-light'>TODOLISTE</p>

                </div>


                <div className='flex flex-col gap-1'>
                    <h1 className='text-3xl text-white italic'>"The secret of getting ahead is getting started."</h1>
                    <span className='text-sm text-green-200 font-light'>-Mark Twain</span>

                </div>
                <div className='flex w-full ml-[9rem]'>
                    <ul className='list-disc font-light list-inside mt-4 text-sm text-green-200 marker:text-yellow-300'>
                        <li>organize your day</li>
                        <li>Track your progreess</li>
                        <li>Stay focused</li>
                    </ul>


                </div>





            </div>
            <div className=' flex flex-col gap-[9rem] justify-center bg-green-100 w-1/2 items-center'>
                <div className='w-[50%] '>

                    <h1 className='text-2xl font-bold text-green-900'>Welcome back</h1>
                    <p className='font-light text-sm text-gray-500'>sing in to your account to continue</p>
                    <div className='flex flex-col gap-1 mt-5'>
                        <p className='mt-1 text-sm '>Email address</p>
                        <input className='bg-white text-black h-12 w-[100%] rounded-lg focus:outline-none p-3' />
                        <p className='mt-1 text-sm '>Password</p>
                        <input className='bg-white text-black h-13 w-[100%] rounded-lg focus:outline-none p-3' />
                        <button className='bg-green-900 w-full h-9 text-xl font-bold rounded-lg mb-5 mt-5 text-white'>Sign in</button>

                    </div>
                    <div className='flex flex-col bg-green-200 rounded-lg border-1 border-white w-full h-[30%] items-center justify-center'>
                        <p className=' text-yellow-900 font-light text-sm '>Demo creadentials</p>
                        <p className="text-sm">Email: demo@example.com</p>
                        <p className="text-sm">Password: 123456</p>
                        <p className='flex items-center gap-2 underline decoration-solid font-light  '>Fill authomatically <FaLongArrowAltRight className='' /></p>
                    </div>
                </div>

            </div>


        </div>
    )
}
