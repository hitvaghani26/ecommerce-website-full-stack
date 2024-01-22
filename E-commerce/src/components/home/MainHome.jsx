import React from 'react'

import { IoIosStar } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { CiMoneyBill } from "react-icons/ci";
import { MdSupportAgent, MdOutlinePayment } from "react-icons/md";
import { woman1, bag1, bag2, bag3, bag5, couple1, couple2, fashion, fashion1, fashion2, femaleWatch, footer1, footer2, footer3, footer4, man, manWatch, manWatch2, manWatch3, manWatch4, pants1, pants2, photo, unsplash, tshirt, tshirt2, tshirt5, tshirtw, woman, woman2, woman3, woman4, woman6, woman7, refooter, rewoman } from "../../assets/photo/index";
import { TECarousel, TECarouselItem } from "tw-elements-react";
const MainHome = () => {
  return (
    <div className='mainbanner'>
    <div className='mainbanner-content  flex flex-col md:flex-row '>
      <div className=' w-full h-[90vh] bg-cover bg-center md:bg-left' style={{ backgroundImage: `url(${woman1})` }}>
        <div className='flex flex-col w-3/4 h-full justify-center pl-8'>
          <div className='font-bold font-dancing md:text-3xl text-2xl my-2'>Women’s fashion</div>
          <div className='font-light my-2'>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna aliquapendisse ultrices gravida.</div>
          <div className=''><p className='font-semibold font-Montserrat border-b-2 inline-block border-orange-500'>SHOP NOW</p></div>
        </div>
      </div>
      <div className='bg-red-500 w-full'>
        <div className='md:flex md:flex-row  flex-col h-[100vh] md:h-1/2' >
          <div className='w-full md:h-full h-1/2  bg-cover  bg-center  md:bg-left' style={{ backgroundImage: `url(${man})` }}>
            <div className='flex flex-col w-3/4 h-full  justify-center pl-8'>
              <div className='font-bold font-Montserrat md:text-3xl text-2xl my-2'>Man's</div>
              <div className='font-light my-2'>Sitamet, consectetur adipiscing elit, sed do eiusmod</div>
              <div className=''><p className='font-semibold font-Montserrat border-b-2 inline-block border-orange-500'>SHOP NOW</p></div>
            </div>
          </div>
          <div className='w-full md:h-full h-1/2 bg-cover  bg-center  md:bg-left' style={{ backgroundImage: `url(${woman2})` }}>
            <div className='flex flex-col w-3/4 h-full justify-center pl-8'>
              <div className='font-bold font-Montserrat md:text-3xl text-2xl my-2'>Kid's </div>
              <div className='font-light my-2'>Sitamet, consectetur adipiscing elit, sed do eiusmod </div>
              <div className=''><p className='font-semibold font-Montserrat border-b-2 inline-block border-orange-500'>SHOP NOW</p></div>
            </div>
          </div>
        </div>
        <div className='md:flex md:flex-row  flex-col h-[100vh] md:h-1/2 '>
          <div className='w-full md:h-full h-1/2 bg-cover  bg-center  md:bg-left' style={{ backgroundImage: `url(${footer2})` }}>
            <div className='flex flex-col w-3/4 h-full justify-center pl-8'>
              <div className='font-bold font-Montserrat md:text-3xl text-2xl my-2'>Cosmetics</div>
              <div className='font-light my-2'>Sitamet, consectetur adipiscing elit, sed do eiusmod</div>
              <div className=''><p className='font-semibold font-Montserrat border-b-2 inline-block border-orange-500'>SHOP NOW</p></div>
            </div>
          </div>
          <div className='w-full md:h-full h-1/2 bg-cover bg-center  md:bg-left' style={{ backgroundImage: `url(${footer4})` }}>
            <div className='flex flex-col w-3/4 h-full justify-center pl-8'>
              <div className='font-bold font-Montserrat md:text-3xl text-2xl my-2'>Accessories</div>
              <div className='font-light my-2'>Sitamet, consectetur adipiscing elit, sed do eiusmod </div>
              <div className=''><p className='font-semibold font-Montserrat border-b-2 inline-block border-orange-500'>SHOP NOW</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MainHome