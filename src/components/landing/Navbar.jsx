import React, { useState } from "react";
import { ShoppingCart, Search, ArrowLeft, Share2, Clock3, Info, Bike, ShoppingBag } from "lucide-react";
import { NavLink } from "react-router-dom";



export default function Navbar({ cart = [], setCart }) {

  const [loginInfo, setLoginInfo] = useState({
    tel: "",
    email: "",
    password: " "
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);


  }
  console.log("loginInfo -> ", loginInfo);

  const handleLogin = (e) =>{
    e.preventDefalut();
  }


  const [show, setShow] = useState(false);

  const [add, setAdd] = useState(false);

  const [mobile, setMobile] = useState("");

  // Mobile Validation


  
const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

  return (
    <>
      {/* NAVBAR */}
      <div className="w-full bg-white shadow-sm px-4 md:px-6 py-3 flex items-center justify-between fixed top-0 left-0 z-[9999]">

        {/* LEFT */}
        <div className="flex items-center gap-4 md:gap-6">
          <h1 className="text-yellow-500 font-bold text-3xl md:text-5xl">
            blink<span className="text-green-700">it</span>
          </h1>

          <div className="hidden md:flex flex-col leading-tight">
            <span className="text-sm md:text-lg font-semibold">
              Delivery in 12 minutes
            </span>

            <span className="text-xs text-gray-600">
              Unit-612B, Tower-A...
            </span>
          </div>
        </div>

        {/* SEARCH */}
        <div className="hidden md:flex flex-1 mx-6 justify-center">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder='Search "milk"'
              className="w-full pl-10 pr-4 py-2 border rounded-lg bg-gray-100 outline-none"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 md:gap-6">

          {/* LOGIN BUTTON */}
          <button
            onClick={() => setShow(true)}
            className="text-gray-700 font-medium text-sm md:text-xl"
          >
            Login
          </button>

          {/* CART */}
          <button onClick={() => setAdd(true)}
            className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg text-gray-600">
            <ShoppingCart size={20} />

            <p className="hidden md:block">
              My Cart
            </p>
          </button>
        </div>
      </div>

      {/* LOGIN MODAL */}
      {show && (
        <div  onSubmit={handleLogin}
          onClick={() => setShow(false)}
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
        >

          {/* MODAL BOX */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl relative"
          >

            {/* BACK BUTTON */}
            <button
              onClick={() => setShow(false)}
              className="absolute left-4 top-4"
            >
              <ArrowLeft />
            </button>

            {/* LOGO */}
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center font-bold">
                blinkit
              </div>
            </div>

            {/* HEADING */}
            <h2 className="text-center text-xl font-semibold">
              India's last minute app
            </h2>

            <p className="text-center text-gray-500 mb-4">
              Log in or
              <NavLink to="/signup"> Sign up</NavLink>
            </p>

            {/* MOBILE INPUT */}
            <div className="flex border rounded-xl px-4 py-3 mb-4">
              <span className="mr-2 text-gray-600">
                +91
              </span>

              <input

                type="tel"
                name="tel"
                inputMode="numeric"
                maxLength={10}
                value={loginInfo.tel}
                onChange={handleChange}
                placeholder="Enter mobile number"
                className="w-full outline-none"
                
              />
            </div>

            {/* EMAIL INPUT */}
            <div className="flex border rounded-xl px-4 py-3 mb-4">
              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full outline-none text-gray-700"
                

              />
            </div>

            {/* PASSWORD INPUT */}
            <div className="flex border rounded-xl px-4 py-3 mb-4">
              <input
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full outline-none text-gray-700"
                
              />
            </div>

            {/* CONTINUE BUTTON */}
            <button type="submit"
              disabled={loginInfo.tel.length !== 10}
              className={`w-full py-3 rounded-xl text-white font-medium transition-all duration-300 ${loginInfo.tel.length === 10
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
                }`}
            >
              Continue
            </button>
          </div>
        </div>
      )}


      <div className=' bg-red-400 h-full w-full '></div>


      {/* CART MODAL */}
      {add && (
  <div
    className="fixed inset-0 bg-black/40 flex justify-end z-50"
    onClick={() => setAdd(false)}
  >
    <div
      className="bg-white w-[400px] h-full p-5 overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-2xl font-bold mb-5">
        My Cart
      </h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-b py-4"
            >
              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <p>Qty : {item.quantity}</p>
              </div>
            </div>
          ))}

          <h3 className="mt-5 font-bold">
            Total : ₹{total}
          </h3>
        </>
      )}
    </div>
  </div>
)}


    </>
  );
}