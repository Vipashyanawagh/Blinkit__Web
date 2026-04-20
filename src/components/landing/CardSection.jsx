import React from "react";

export default function CardSection() {
  return (
    <div className="flex gap-6 p-6">

      {/* CARD 1 */}
      <div className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-800 rounded-3xl p-6 flex items-center justify-between text-white shadow-lg">
        
        {/* Left Content */}
        <div>
          <h1 className="text-2xl font-bold mb-3">
            Get printouts delivered
          </h1>

          <ul className="mb-4 space-y-1 text-sm">
            <li>✔ Safe & secure</li>
            <li>✔ Convenient & Fast</li>
          </ul>

          <button className="bg-white text-black px-4 py-2 rounded-xl font-medium">
            Order Now
          </button>
        </div>

        {/* Right Image */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
          alt="printer"
          className="h-28"
        />
      </div>

      {/* CARD 2 */}
      <div className="flex-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-3xl p-6 flex items-center justify-between text-white shadow-lg">
        
        <div>
          <h1 className="text-2xl font-bold mb-3">
            Pharmacy at your doorstep!
          </h1>

          <p className="text-sm mb-4">
            Cough syrups, pain relief sprays & more
          </p>

          <button className="bg-white text-black px-4 py-2 rounded-xl font-medium">
            Order Now
          </button>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png"
          alt="medicine"
          className="h-28"
        />
      </div>

      {/* CARD 3 */}
      <div className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-6 flex items-center justify-between text-black shadow-lg">
        
        <div>
          <h1 className="text-2xl font-bold mb-3">
            Pet care supplies at your door
          </h1>

          <p className="text-sm mb-4">
            Food, treats, toys & more
          </p>

          <button className="bg-black text-white px-4 py-2 rounded-xl font-medium">
            Order Now
          </button>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
          alt="pet"
          className="h-28"
        />
      </div>

    </div>
  );
}