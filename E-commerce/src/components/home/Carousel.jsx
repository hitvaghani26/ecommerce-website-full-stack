import React from 'react'
import { IoIosStar } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { CiMoneyBill } from "react-icons/ci";
import { MdSupportAgent, MdOutlinePayment } from "react-icons/md";
import { woman1, bag1, bag2, bag3, bag5, couple1, couple2, fashion, fashion1, fashion2, femaleWatch, footer1, footer2, footer3, footer4, man, manWatch, manWatch2, manWatch3, manWatch4, pants1, pants2, photo, unsplash, tshirt, tshirt2, tshirt5, tshirtw, woman, woman2, woman3, woman4, woman6, woman7, refooter, rewoman } from "../../assets/photo/index";
import { TECarousel, TECarouselItem } from "tw-elements-react";

const Carousel = () => {
  return (
    <div className='carousel flex flex-row bg-slate-200'>
        <div className='w-1/4 bg-cover bg-left' style={{ backgroundImage: `url(${rewoman})` }}>

        </div>
        <TECarousel showControls showIndicators crossfade ride="carousel" className='w-full' >
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            <TECarouselItem
              itemID={1}
              className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <div className='w-full h-[60vh] flex justify-center items-center '>
                <div className=''>
                  <p className='text-red-600 font-Montserrat text-center'> THE HUJN COLLECTION </p>
                  <p className='text-5xl my-2 font-extrabold font-dancing text-center'>THE JJODOF JACKET</p>
                  <p className='text-sm font-Montserrat font-bold text-center mt-8'>SHOP NOW</p>
                </div>
              </div>  
            </TECarouselItem>
            <TECarouselItem
              itemID={2}
              className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <div className='w-full h-[60vh] flex justify-center items-center '>
                <div className=''>
                  <p className='text-red-600 font-Montserrat text-center'> THE DJGHF COLLECTION </p>
                  <p className='text-5xl my-2 font-extrabold font-dancing text-center'>THE DJGHF TSHIRT</p>
                  <p className='text-sm font-Montserrat font-bold text-center mt-8'>SHOP NOW</p>
                </div>
              </div>
            </TECarouselItem>
            <TECarouselItem
              itemID={3}
              className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <div className='w-full h-[60vh] flex justify-center items-center '>
                <div className=''>
                  <p className='text-red-600 font-Montserrat text-center'> THE ABC COLLECTION </p>
                  <p className='text-5xl my-2 font-extrabold font-dancing text-center'>THE ABC COLLECTION</p>
                  <p className='text-sm font-Montserrat font-bold text-center mt-8'>SHOP NOW</p>
                </div>
              </div>
            </TECarouselItem>
          </div>
        </TECarousel>

        <div className='w-1/4 bg-cover bg-center' style={{ backgroundImage: `url(${refooter})` }}>

        </div>
      </div>
  )
}

export default Carousel