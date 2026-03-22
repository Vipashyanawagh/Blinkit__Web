import React from 'react'

function StockCard() {
  return (
    <div className='bg-green-700 w-330 ml-15  h-70 mt-10 rounded-2xl bg-linear-to-l from-green-600 to-green-800  flex  '>
        <div className='text-white   '>
            <h1 className='text-5xl ml-9  pt-7 font-semibold '>Stock up on daily essentails</h1>
            <p className='text-3xl w-170 ml-9 pt-5  '>Get farm-fresh goodness & a range of exotic fruits, vegetables, eggs & more</p>
            <button className='bg-white ml-9 mt-5  text-gray-800 px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition '>Shop Now</button>
        </div>
        <div className=' '>
            <img  className=' mt-10 ml-15 rounded-2xl w-130 h-50  'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjkuhBrICyVmte1-PFpaucW82vd6lsmkfxw&s"></img>
        </div>
    </div>
  )
}

export default StockCard