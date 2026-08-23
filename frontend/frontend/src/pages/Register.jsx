import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log({
      username,
      email,
      password
    });


  };

  return (
    <div className="min-h-screen w-full bg-green-950 flex justify-center items-center">

      <div className="bg-white w-[35rem] p-10 rounded-2xl shadow-2xl">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-900">
            Create an account
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            Create your account to get started
          </p>
        </div>

        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-5"
        >

       
          <div>
            <label className="text-sm font-medium text-gray-700">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-black focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

        
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-black focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-black focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

         
          <div>
            <label className="text-sm font-medium text-gray-700">
              Confirm password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-2 w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-black focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          
          <button
            type="submit"
            className="w-full h-11 bg-green-900 text-white rounded-lg font-bold text-lg mt-2 hover:bg-green-700 transition"
          >
            Create Account
          </button>

        </form>

       
        <p className="text-center text-sm text-gray-500 mt-7">
          Already have an account?{" "}

          <Link
            to="/login"
            className="text-green-800 font-semibold hover:underline"
          >
            Sign in
          </Link>
        </p>

      </div>

    </div>
  );
}