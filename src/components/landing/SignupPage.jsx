import React from "react";




export  default function SignupPage() {
  return (
    <div className="min-h-screen bg-black/40 flex items-center justify-center">
      <div className="bg-white w-[400px] rounded-2xl shadow-xl p-8 relative">
        <button className="absolute left-4 top-4 text-gray-600 hover:text-black">←</button>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="bg-yellow-400 w-16 h-16 rounded-xl flex items-center justify-center font-bold text-xl">
            hb
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-center text-gray-800">Create Account</h1>
        <p className="text-center text-gray-500 mb-6">Sign up to get started</p>

        {/* Username */}
        <div className="mb-4">
          <input type="text" placeholder="Enter username" className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400" />
        </div>

        {/* Email */}
        <div className="mb-4">
          <input type="email" placeholder="Enter email" className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400" />
        </div>

        {/* Mobile */}
        <div className="mb-4">
          <input type="tel" placeholder="Enter mobile number" className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400" />
        </div>

        {/* Role */}
        <div className="mb-4">
          <select className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <option value="">Select role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Password */}
        <div className="mb-6">
          <input type="password" placeholder="Enter password" className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400" />
        </div>

        {/* Signup Button */}
        <button className="w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold hover:bg-yellow-500 transition">
          Sign Up
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-6">
          By signing up, you agree to our <span className="underline">Terms of Service</span> & <span className="underline">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}
