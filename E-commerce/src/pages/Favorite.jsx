import React from 'react'
import { IoIosStar } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { CiMoneyBill } from "react-icons/ci";
import { MdSupportAgent, MdOutlinePayment } from "react-icons/md";
import { woman1, bag1, bag2, bag3, bag5, couple1, couple2, fashion, fashion1, fashion2, femaleWatch, footer1, footer2, footer3, footer4, man, manWatch, manWatch2, manWatch3, manWatch4, pants1, pants2, photo, unsplash, tshirt, tshirt2, tshirt5, tshirtw, woman, woman2, woman3, woman4, woman6, woman7, refooter, rewoman } from "../assets/photo/index";
const Favorite = () => {
  return (
    <div className='mx-12 my-4'>

    {/* this is link section  */}
    <div className='product-link-section flex justify-between'>
      <h2 className='md:text-3xl text-xl font-semibold'>Woman's product</h2>
      <div className='links'>
        <ul className='flex'>
        <li className='mx-2 font-bold'>Sort By</li>
          <li className='mx-2'>Price</li>
          <li className='mx-2'>Review</li>
          
        </ul>
      </div>
    </div>
    {/* this is product card section  */}
    <div className='md:flex justify-between my-4 gap-10'>
      <div className=' md:w-1/4 w-full   bg-cover' >
        <div className='h-96 w-full   bg-cover' style={{ backgroundImage: `url(${footer3})` }}></div>
        <h3 className='text-center text-sm font-base font-Montserrat mt-3'>Cloth name</h3>
        <div className='text-center flex justify-center text-sm text-gray-700' ><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
        <h2 className='text-lg font-bold text-center'>$59.99</h2>
      </div>

      <div className=' md:w-1/4 w-full  bg-cover' >
        <div className='h-96 w-full   bg-cover' style={{ backgroundImage: `url(${footer3})` }}></div>
        <h3 className='text-center text-sm font-base font-Montserrat mt-3'>Cloth name</h3>
        <div className='text-center flex justify-center text-sm text-gray-700' ><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
        <h2 className='text-lg font-bold text-center'>$59.99</h2>
      </div>
      <div className=' md:w-1/4 w-full   bg-cover' >
        <div className='h-96 w-full   bg-cover' style={{ backgroundImage: `url(${footer3})` }}></div>
        <h3 className='text-center text-sm font-base font-Montserrat mt-3'>Cloth name</h3>
        <div className='text-center flex justify-center text-sm text-gray-700' ><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
        <h2 className='text-lg font-bold text-center'>$59.99</h2>
      </div>
      <div className=' md:w-1/4 w-full   bg-cover' >
        <div className='h-96 w-full   bg-cover' style={{ backgroundImage: `url(${footer3})` }}></div>
        <h3 className='text-center text-sm font-base font-Montserrat mt-3'>Cloth name</h3>
        <div className='text-center flex justify-center text-sm text-gray-700' ><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
        <h2 className='text-lg font-bold text-center'>$59.99</h2>
      </div>
    </div>
    <div className='md:flex justify-between my-4 gap-10'>
      <div className=' md:w-1/4 w-full   bg-cover' >
        <div className='h-96 w-full   bg-cover' style={{ backgroundImage: `url(${footer3})` }}></div>
        <h3 className='text-center text-sm font-base font-Montserrat mt-3'>Cloth name</h3>
        <div className='text-center flex justify-center text-sm text-gray-700' ><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
        <h2 className='text-lg font-bold text-center'>$59.99</h2>
      </div>
      <div className=' md:w-1/4 w-full   bg-cover' >
        <div className='h-96 w-full   bg-cover' style={{ backgroundImage: `url(${footer3})` }}></div>
        <h3 className='text-center text-sm font-base font-Montserrat mt-3'>Cloth name</h3>
        <div className='text-center flex justify-center text-sm text-gray-700' ><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
        <h2 className='text-lg font-bold text-center'>$59.99</h2>
      </div>
      <div className=' md:w-1/4 w-full   bg-cover' >
        <div className='h-96 w-full   bg-cover' style={{ backgroundImage: `url(${footer3})` }}></div>
        <h3 className='text-center text-sm font-base font-Montserrat mt-3'>Cloth name</h3>
        <div className='text-center flex justify-center text-sm text-gray-700' ><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
        <h2 className='text-lg font-bold text-center'>$59.99</h2>
      </div>
      <div className=' md:w-1/4 w-full   bg-cover' >
        <div className='h-96 w-full   bg-cover' style={{ backgroundImage: `url(${footer3})` }}></div>
        <h3 className='text-center text-sm font-base font-Montserrat mt-3'>Cloth name</h3>
        <div className='text-center flex justify-center text-sm text-gray-700' ><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
        <h2 className='text-lg font-bold text-center'>$59.99</h2>
      </div>
    </div>
  </div>
  )
}

export default Favorite