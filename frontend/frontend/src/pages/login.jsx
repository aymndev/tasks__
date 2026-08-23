
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../services/auth"
import { Link } from "react-router-dom";
import Register from "./Register";



export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e) {
        e.preventDefault()
        console.log("Button clicked");
        console.log(email);
        console.log(password);
        

        const response = await login({
            email,
            password,

        });
        console.log(response.data);
        const user = response.data.user;
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("user",JSON.stringify(user));
        console.log(JSON.parse(localStorage.getItem("user")));
        
        if (!user) {
            alert("User not found. Please create a new account.");
            return;
        }
        if (user.role == 'admin') {
            navigate("/admin/dashboard");



        } else {
            navigate("/tasks");
        }


    }

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
                        <input

                            className='bg-white text-black h-12 w-[100%] rounded-lg focus:outline-none p-3'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />

                        <p className='mt-1 text-sm '>Password</p>
                        <input
                            value={password}
                            className='bg-white text-black h-13 w-[100%] rounded-lg focus:outline-none p-3'
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                            onClick={handleLogin}
                            className='bg-green-900 w-full h-9 text-xl font-bold rounded-lg mb-5 mt-5 text-white hover:bg-green-500'>
                            Sign in
                        </button>
                      
                        <p className="text-center mt-4 text-gray-600">
    Don't have an account?{" "}
    <Link
        to="/register"
        className="text-blue-600 hover:underline"
    >
        Create an account
    </Link>
</p>
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
