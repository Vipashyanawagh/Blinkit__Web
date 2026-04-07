import React, { useState } from "react";
import { ShoppingCart, Search, ArrowLeft } from "lucide-react";







export default function Navbar() {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState(false);
  const [mobile, setMobile] = useState("");
     

   const handleChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setMobile(value);
  };


  function showitems() {
    setItems(!items);
  }

  // ✅ Cart Items State
  const cardItems = [
    {
      id: 1,
      name: "Kinder Joy (Blue)",
      weight: "20 g",
      price: 45,
      image: "https://m.media-amazon.com/images/I/61E0gYJbTQL.jpg",
      qty: 1,
    },
    {
      id: 2,
      name: "Nestle KitKat 4 Fingers",
      weight: "38.5 g",
      price: 30,
      image: "https://m.media-amazon.com/images/I/61dW3r7ZbKL.jpg",
      qty: 1,
    }, {
      id: 3,
      name: "Cadbury 5 Star",
      weight: "35.2 g",
      price: 20,
      image: "https://m.media-amazon.com/images/I/71LJ7q+v3XL.jpg",
      qty: 1,
    },
    {
      id: 4,
      name: "Cadbury Bournville",
      weight: "75 g",
      price: 110,
      image: "https://m.media-amazon.com/images/I/71r8nKz7gHL.jpg",
      qty: 1,
    },
  ];



  // ✅ Quantity Update
  function updateQty(id, type) {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          let newQty = type === "inc" ? item.qty + 1 : item.qty - 1;
          if (newQty < 1) newQty = 1;
          return { ...item, qty: newQty };
        }
        return item;
      })
    );
  }

  // ✅ Total Price
  const total = cardItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <>
      {/* NAVBAR */}
      <div className="w-full bg-white shadow-sm px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Left */}
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

        {/* Search */}
        <div className="hidden md:flex flex-1 mx-6 justify-center">
          <div className="relative w-full ">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder='Search "milk"'
              className="w-full pl-10 pr-4 py-2 border rounded-lg bg-gray-100"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={() => setShow(true)}
            className="text-gray-700 font-medium text-sm md:text-xl"
          >
            Login
          </button>

          <button
            onClick={showitems}
            className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg text-gray-600"
          >
            <ShoppingCart size={20} />
            <span className="hidden md:block">My Cart</span>
          </button>
        </div>
      </div>

      {/* LOGIN MODAL */}
    {show && (
  <div
    onClick={() => setShow(false)}
    className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
  >
    {/* ✅ IMPORTANT: stop closing */}
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl relative"
    >
      
      <button
        onClick={() => setShow(false)}
        className="absolute left-4 top-4"
      >
        <ArrowLeft />
      </button>

      <div className="flex justify-center mb-6">
        <div className="bg-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center font-bold">
          blinkit
        </div>
      </div>

      <h2 className="text-center text-xl font-semibold">
        India's last minute app
      </h2>

      <p className="text-center text-gray-500 mb-4">
        Log in or Sign up
      </p>

      {/* ✅ FIXED INPUT */}
      <div className="flex border rounded-xl px-4 py-3 mb-4">
        <span className="mr-2 text-gray-600">+91</span>
        <input
          type="tel"
          inputMode="numeric"
          maxLength="10"
          value={mobile}
          onChange={handleChange}
          placeholder="Enter mobile number"
          className="w-full outline-none"
        />
      </div>

      <button
        disabled={mobile.length !== 10}
        className={`w-full py-3 rounded-xl text-white ${
          mobile.length === 10
            ? "bg-green-600"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Continue
      </button>
    </div>
  </div>
)}


         
  



      {/* my Card Model*/}
      {items && (
        <div onClick={showitems}
          className='fixed inset-0 absolute z-50  bg-black/40 '>
          <div className=" fixed  right-0 top-0 h-full w-full z-50  bg-white  sm:w-[380px] shadow-lg flex flex-col">

            {/* Header */}
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">My Cart</h2>
              <button onClick={showitems} className=" fixed inset-0  text-gray-500">✕</button>
            </div>
            {/* Savings */}
            <div className="m-4 p-3 bg-blue-100 text-blue-600 rounded-lg text-sm">
              Your total savings ₹25
            </div>

            {/* Delivery Info */}
            <div className="mx-4 p-4 bg-gray-100 rounded-lg flex items-center gap-3">
              <span className="text-xl">⏱️</span>
              <div>
                <p className="font-medium">Delivery in 9 minutes</p>
                <p className="text-sm text-gray-500">Shipment of 4 items</p>
              </div>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cardItems.map((item) => (
                <div key={item.id} className="flex gap-3 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded-md"
                  />

                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item.weight}</p>
                    <p className="text-sm font-semibold">₹{item.price}</p>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center bg-green-600 text-white rounded-md">
                    <button className="px-2">-</button>
                    <span className="px-2">{item.qty}</span>
                    <button className="px-2">+</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t">
              <button className="w-full bg-green-600 text-white py-3 rounded-lg flex justify-between items-center px-4">
                <span>₹{total} TOTAL</span>
                <span>Login to Proceed →</span>
              </button>
            </div>
          </div>
        </div>
      )}


    </>
  );
}