import React from 'react'

function StockCard() {
  return (
    <div
      className='relative w-full h-[300px] ml-15 rounded-2xl overflow-hidden flex items-center px-12 z-0 mt-20 '
      
      style={{
        backgroundImage: `
          linear-gradient(to right, #0f7a36 35%, rgba(15,122,54,0.85) 40%, rgba(15,122,54,0.3) 65%, transparent),
          url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjkuhBrICyVmte1-PFpaucW82vd6lsmkfxw&s")
        `,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat"
      }}
    >
      
      {/* TEXT */}
      <div className='text-white max-w-[55%] z-10'>
        <h1 className='text-5xl font-bold leading-tight'>
          Stock up on daily essentials
        </h1>

        <p className='text-3xl pt-5 text-gray-100'>
          Get farm-fresh goodness & a range of exotic
          <p> fruits, vegetables, eggs & more</p>
        </p>

        <button className='bg-white mt-6 text-gray-800 px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition'>
          Shop Now
        </button>
      </div>

    </div>
  )
}

export default StockCard