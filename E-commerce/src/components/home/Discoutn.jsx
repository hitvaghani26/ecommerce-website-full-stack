import React from 'react'
import { IoIosStar } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { CiMoneyBill } from "react-icons/ci";
import { MdSupportAgent, MdOutlinePayment } from "react-icons/md";
import { woman1, bag1, bag2, bag3, bag5, couple1, couple2, fashion, fashion1, fashion2, femaleWatch, footer1, footer2, footer3, footer4, man, manWatch, manWatch2, manWatch3, manWatch4, pants1, pants2, photo, unsplash, tshirt, tshirt2, tshirt5, tshirtw, woman, woman2, woman3, woman4, woman6, woman7, refooter, rewoman } from "../../assets/photo/index";
const Discoutn = () => {
  return (
    <>
    <div className='md:flex justify-center mt-8 mx-12 my-12'>
        <div className='w-full h-[50vh]  bg-cover bg-no-repeat bg-top' style={{ backgroundImage: `url(${woman})` }}></div>
        <div className='w-full flex flex-col items-center justify-center bg-slate-300 z-10 '>
          <div className='discount flex flex-col items-center relative mb-8'>
            <p className='mb-4'>DISCOUNT</p>
            <p className='font-dancing text-red-600 font-bold text-4xl'>Summer 2024</p>
            <p className='mt-4'>SALE <samp className='text-red-600 font-bold'>50%</samp></p>
            <div className='absolute top-0 h-[100%] -z-20 w-[150%] rounded-full bg-white'></div>
          </div>
          <div>
            <div className='time-section flex flex-row'>
              <div className='sm:text-lg md:text-2xl mx-0 md:mx-4 font-bold'>30<span className='text-xs mx-1 font-normal'>Days</span> </div>
              <div className='sm:text-lg md:text-2xl mx-0 md:mx-4 font-bold'>24<span className='text-xs mx-1 font-normal'>Hour</span> </div>
              <div className='sm:text-lg md:text-2xl mx-0 md:mx-4 font-bold'>60<span className='text-xs mx-1 font-normal'>Min</span> </div>
              <div className='sm:text-lg md:text-2xl mx-0 md:mx-4 font-bold'>60<span className='text-xs mx-1 font-normal'>Sec</span> </div>
            </div>
            <div className='text-center  items-center text-lg pt-5'>
              <p className='mb-8 md:mb-0 border-b-2 inline-block border-orange-500'>SHOP NOW</p>
            </div>
          </div>
        </div>
      </div>


      <div className='discout-section md:flex flex gap-10 md:gap-0  flex-col md:flex-row justify-center  mt-8'>
        <div className='w-full flex flex-row justify-center'>
          <div className='text-rose-700'>
            <FaCar size={40} />
          </div>
          <div className='pl-4'>
            <p>Free Shipping</p>
            <p>For all oder over $99</p>

          </div>
        </div>
        <div className='w-full flex flex-row justify-center'>
          <div className='text-rose-700'>
            <CiMoneyBill size={40} />
          </div>
          <div className='pl-4'>
            <p>Free Shipping</p>
            <p>For all oder over $99</p>

          </div>
        </div>
        <div className='w-full flex flex-row justify-center'>
          <div className='text-rose-700'>
            <MdSupportAgent size={40} />
          </div>
          <div className='pl-4'>
            <p>Free Shipping</p>
            <p>For all oder over $99</p>

          </div>
        </div>
        <div className='w-full flex flex-row justify-center'>
          <div className='text-rose-700'>
            <MdOutlinePayment size={40} />
          </div>
          <div className='pl-4'>
            <p>Free Shipping</p>
            <p>For all oder over $99</p>

          </div>
        </div>
      </div>
      </>
  )
}

export default Discoutn