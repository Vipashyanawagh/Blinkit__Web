import React from "react";

export default function Card() {
  return (
    <div className="w-full max-w-7xl mx-auto rounded-2xl overflow-hidden flex items-center justify-between px-10 py-8 bg-gradient-to-r from-green-700 via-green-500 to-yellow-400 mt-5 ">
      {/* Left Content */}
      <div className="text-white max-w-xl">
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Stock up on daily essentials
        </h1>
        <p className="text-xl text-green-100 mb-6">
          Get farm-fresh goodness & a range of exotic fruits, vegetables, eggs & more
        </p>

        <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition">
          Shop Now
        </button>
      </div>

      {/* Right Image */}
      <div className="hidden md:flex items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjR59PZiJzIIsmYbHJvcO9QOYuPMOHX_PCUw&s"
          alt="groceries"
          className="h-64 object-contain drop-shadow-xl"
        />
      </div>
    </div>
  );
}