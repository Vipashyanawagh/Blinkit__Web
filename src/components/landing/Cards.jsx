import React from "react";
import { CheckCircle } from "lucide-react";

export default function Cards() {
  return (
    <div className="flex  h-50  ml-15  mt-5  gap-3   rounded-2xl  ">
      
      <div className="w-100    bg-gradient-to-b  from-blue-400 to-indigo-900 rounded-3xl p-8 flex items-center justify-between shadow-lg">
        
        {/* Left Content */}
        <div className="text-white ">
          <h1 className=" text-2xl font-bold w-50  ">
            Get printouts delivered
          </h1>

          <div className="space-y-2 mb-4 mt-1 ">
            <div className="flex items-center gap-2">
              <CheckCircle size={18} />
              <span>Safe & secure</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle size={18} />
              <span>Convenient & Fast</span>
            </div>
          </div>

          <button className="  px-4 rounded-xl py-1 bg-white text-gray-800 font-medium shadow">
            Order Now
          </button>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpWMehTovEjF-EtEiHv78wJ_6kHDId7fvmQA&s"
            alt="printer"
            className="h-40 rounded-md  "
          />
        </div>
      </div>


      <div className="w-100   bg-gradient-to-l  from-teal-400 to-teal-500  rounded-3xl p-8 flex items-center justify-between shadow-lg">
        
        {/* Left Content */}
        <div className="text-white ">
          <h1 className=" text-2xl font-bold w-50  ">
            Get printouts delivered
          </h1>

          <div className="space-y-2 mb-4 mt-1 ">
            <div className="flex items-center gap-2">
              <CheckCircle size={18} />
              <span>Safe & secure</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle size={18} />
              <span>Convenient & Fast</span>
            </div>
          </div>

          <button className="  px-4 rounded-xl py-1 bg-white text-gray-800 font-medium shadow">
            Order Now
          </button>
        </div>
         {/* Right Image */}
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfCv3o4e5jPhNYAxVOXrh8_8_SI1sdbz_k7A&s"
            alt="printer"
            className="rounded-md h-40 "
          />
        </div>
      </div>


     <div className="w-100   bg-gradient-to-b  from-yellow-400 to-yellow-300 rounded-3xl p-8 flex items-center justify-between shadow-lg">
        
        {/* Left Content */}
        <div className="text-white ">
          <h1 className=" text-2xl font-bold w-50  ">
            Get printouts delivered
          </h1>

          <div className="space-y-2 mb-4 mt-1 ">
            <div className="flex items-center gap-2">
              <CheckCircle size={18} />
              <span>Safe & secure</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle size={18} />
              <span>Convenient & Fast</span>
            </div>
          </div>

          <button className="  px-4 rounded-xl py-1 bg-white text-gray-800 font-medium shadow">
            Order Now
          </button>
        </div>
         {/* Right Image */}
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREnKi-ZUb_oYL77tBM1wgA-iq1htULY5qHUw&s"
            alt="printer"
            className="rounded-md "
          />
        </div>
      </div>


     
    </div>
  );
}