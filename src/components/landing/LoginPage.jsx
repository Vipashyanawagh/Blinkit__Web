import React ,{ useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
    
     const [formdata ,setformdata] = useState({});
     const [message ,setmessage ] = useState(" ");

     function inputhandler(e){
      const {name,value} = e.target

      setformdata((prev)=>({...prev,[name]:value}))
      console.log(formdata)
     }

     async function submithandler(e){
       
        console.log(formdata)
     
        const res= await axios.post("http://localhost:3000/api/v1/user/login", formdata)
        if(res.data){
            setmessage(res.data.message)
        }
        console.log(res)
     }
  return (
    <div className="min-h-screen bg-black/40 flex items-center justify-center">
      {/* Overlay Card */}
      <div className="bg-white w-[400px] rounded-2xl shadow-xl p-8 relative">
        {/* Back Button */}
        <button className="absolute left-4 top-4  hover:text-black">
          ←
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="bg-yellow-400 w-16 h-16 rounded-xl flex items-center justify-center font-bold text-xl">
            hb
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back
        </h1>
        <div className='flex justify-center '>
         <button className="text-center text-gray-500 mb-6">
          Log in--or--
        </button>
        <NavLink to={"/signup"}>
         <button className="text-center text-gray-500 mb-6">
          Sign up
        </button>
        </NavLink>
         </div>
        


        {/* Email Input */}
        <div className="mb-4">
          <input
            type="email"
            onChange={inputhandler}
            name="email"
            placeholder="Enter email"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <input
            type="password"
             onChange={inputhandler}
             name="password"
            placeholder="Enter password"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {
            message && (<p>{message}</p>)
        }

        {/* Continue Button */}
        <button  onClick={submithandler} className="w-full bg-gray-400 text-white py-3 rounded-xl font-semibold hover:bg-blue-500 transition">
          Continue
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-6">
          By continuing, you agree to our{' '}
          <span className="underline">Terms of Service</span> &{' '}
          <span className="underline">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}