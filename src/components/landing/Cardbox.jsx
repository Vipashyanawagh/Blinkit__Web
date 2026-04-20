import React from "react";
import { CheckCircle } from "lucide-react";
import { NavLink } from "react-router-dom"; // ✅ FIXED

export default function Cardbox() {
  return (
      <div className="flex h-50 ml-15 mt-5 gap-3 rounded-2xl">

        {/* CARD 1 */}
        <div className="w-100 bg-gradient-to-b from-blue-400 to-indigo-900 rounded-3xl p-8 flex items-center justify-between shadow-lg">
       
          <div className="text-white">
            <h1 className="text-2xl font-bold w-50">
              Get printouts delivered
            </h1>

            <div className="space-y-2 mb-4 mt-1">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} />
                <span>Safe & secure</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={18} />
                <span>Convenient & Fast</span>
              </div>
            </div>

            <button className="px-4 rounded-xl py-1 bg-white text-gray-800 font-medium shadow">
              Order Now
            </button>
          </div>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpWMehTovEjF-EtEiHv78wJ_6kHDId7fvmQA&s"
            alt="printer"
            className="h-40 rounded-md"
          />
         
        </div>

        {/* CARD 2 */}
       
         <div className="w-100 bg-gradient-to-b from-cyan-400 to-blue-500  rounded-3xl p-8 flex items-center justify-between shadow-lg">
       
          <div className="text-white">
            <h1 className="text-2xl font-bold w-50">
              Get printouts delivered
            </h1>

            <div className="space-y-2 mb-4 mt-1">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} />
                <span>Safe & secure</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={18} />
                <span>Convenient & Fast</span>
              </div>
            </div>

            <button className="px-4 rounded-xl py-1 bg-white text-gray-800 font-medium shadow">
              Order Now
            </button>
          </div>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpWMehTovEjF-EtEiHv78wJ_6kHDId7fvmQA&s"
            alt="printer"
            className="h-40 rounded-md"
          />
         
        </div>
        {/* CARD 3 */}
        <div className="w-100 bg-gradient-to-b from-yellow-300  to-amber-500 rounded-3xl p-8 flex items-center justify-between shadow-lg">
       
          <div className="text-white">
            <h1 className="text-2xl font-bold w-50">
              Get printouts delivered
            </h1>

            <div className="space-y-2 mb-4 mt-1">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} />
                <span>Safe & secure</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={18} />
                <span>Convenient & Fast</span>
              </div>
            </div>

            <button className="px-4 rounded-xl py-1 bg-white text-gray-800 font-medium shadow">
              Order Now
            </button>
          </div>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpWMehTovEjF-EtEiHv78wJ_6kHDId7fvmQA&s"
            alt="printer"
            className="h-40 rounded-md"
          />
         
        </div>
    
      </div>
    
  );
}