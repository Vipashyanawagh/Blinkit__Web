import React from "react";
import { ShoppingCart, Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full bg-white shadow-sm px-6 py-3 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        <h1 className="text-yellow-500 font-bold text-5xl">
          blink<span className="text-green-700">it</span>
        </h1>

        <div className="flex flex-col leading-tight">
          <span className="text-lg font-semibold ml-8">
            Delivery in 12 minutes
          </span>
          <span className="text-xs text-gray-600 ml-8">
            Unit-612B, TOWER-A, Unitech B...
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-6 flex justify-center">
        <div className="relative w-150">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder='Search "milk"'
            className="w-full pl-10 pr-4 py-2 border rounded-lg bg-gray-100 focus:outline-none"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 ">
        <button className="text-gray-700 font-medium mr-10 text-xl">
          Login
        </button>

        <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg text-gray-500 mr-9">
          <ShoppingCart size={20} />
          <span>My Cart</span>
        </button>
      </div>
    </div>
  );
}
