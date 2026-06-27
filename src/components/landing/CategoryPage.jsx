import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

function CategoryPage() {
  return (
    <div>

        <div>
             <NavLink to="/navbar"></NavLink>
            <h1 className=' pl-25 text-2xl  font-semibold   mt-20 '>Categories <span className='text-green-600 text-lg pl-3'></span></h1>
            <div className='flex'>
              <div className='ml-25 mt-5 text-gray-600'>
                <ul>
                  <li className='pb-2 text-black font-semibold mb-5 '>Bath & Boy</li>
                  <li className='pb-2'>Bathing Soap</li>
                  <li className='pb-2'>Oral Care</li>
                  <li className='pb-2'>Fragrance & Talc</li>
                  <li className='pb-2'>Shampoo</li>
                  <li className='pb-2'>Face Cleaning</li>
                  <li className='pb-2'>Body Treatment & Roll On </li>
                 
                </ul>
              </div>
              
              <div className='ml-25 mt-17  text-gray-600'>
                 <ul>
                  <li className='pb-2'>Shower Gels & Scrubs </li>
                  <li className='pb-2'>Handwash</li>
                  <li className='pb-2'>Bath Accessories</li>
                  <li className='pb-2'>Conditioner</li>
                  <li className='pb-2'>Body Lotions & Oils</li>
                  <li className='pb-2'>Bath & Beauty Gifts</li>
                 
                
                </ul>

              </div>
              
            </div>




             <div className='flex'>
              <div className='ml-25 mt-5 text-gray-600'>
                <ul>
                  <li className='pb-2 text-black font-semibold mb-5 '>Hair</li>
                  <li className='pb-2'>Shampoo</li>
                  <li className='pb-2'>Hair Color</li>
                  <li className='pb-2'>Hair Oil & Cream</li>
                  <li className='pb-2'>Hair Serum</li>
                  <li className='pb-2'>Appliances</li>
                  <li className='pb-2'>Body Treatment & Roll On </li>
                 
                </ul>
              </div>
              
              <div className='ml-25 mt-17  text-gray-600'>
                 <ul>
                  <li className='pb-2'>Conditioner </li>
                  <li className='pb-2'>Hair Color</li>
                  <li className='pb-2'>Hair Serum</li>
                  <li className='pb-2'>Hair Styling </li>
                  <li className='pb-2'>Hair Accessories</li>
                  <li className='pb-2'>Bath & Beauty Gifts</li>
                 
                
                </ul>

              </div>
              
            </div>




             <div className='flex'>
              <div className='ml-25 mt-5 text-gray-600'>
                <ul>
                  <li className='pb-2 text-black font-semibold mb-5 '>Skin & Face</li>
                  <li className='pb-2'>Sunscreen</li>
                  <li className='pb-2'>Face Oil, Serum, & Essence</li>
                  <li className='pb-2'>Body Lotions & Oils</li>
                  <li className='pb-2'>Face Masks & Packs</li>
                  <li className='pb-2'>Acne & Blackhead Fixer</li>
                  <li className='pb-2'>Women's Grooming </li>
                 
                </ul>
              </div>
              
              <div className='ml-25 mt-17  text-gray-600'>
                 <ul>
                  <li className='pb-2'>Face Cleaning  </li>
                  <li className='pb-2'>Face Moisturisers</li>
                  <li className='pb-2'>Lips & Eye Care</li>
                  <li className='pb-2'>Toners & Mists</li>
                  <li className='pb-2'>Body Lotions & Oils</li>
                  <li className='pb-2'>Men's Grooming</li>
                 
                
                </ul>

              </div>
              
            </div>




             <div className='flex'>
              <div className='ml-25 mt-5 text-gray-600'>
                <ul>
                  <li className='pb-2 text-black font-semibold mb-5 '>Beauty & Cosmetics
                  </li>
                  <li className='pb-2'>Lipstick & Gloss</li>
                  <li className='pb-2'>Foundation & Compact</li>
                  <li className='pb-2'>Primer & Concealer</li>
                  <li className='pb-2'>Bindi, Bangles & Others</li>
                  <li className='pb-2'>Beauty Accessories</li>
                  <li className='pb-2'>Beauty E-Card</li>
                 
                </ul>
              </div>
              
              <div className='ml-25 mt-17  text-gray-600'>
                 <ul>
                  <li className='pb-2'>Cleansers & Toners </li>
                  <li className='pb-2'>Blush & Highlighter</li>
                  <li className='pb-2'>Kajal & Eyeliners</li>
                  <li className='pb-2'>Nail Paints & Accessories</li>
                  <li className='pb-2'>Body Lotions & Oils</li>
                  <li className='pb-2'>Bath & Beauty Gifts</li>
                 
                
                </ul>

              </div>
              
            </div>
          </div>

    </div>
  )
}

export default CategoryPage