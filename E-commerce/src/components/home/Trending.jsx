import React, { useEffect } from 'react'
import { IoIosStar } from "react-icons/io";

import { woman1, bag1, bag2, bag3, bag5, couple1, couple2, fashion, fashion1, fashion2, femaleWatch, footer1, footer2, footer3, footer4, man, manWatch, manWatch2, manWatch3, manWatch4, pants1, pants2, photo, unsplash, tshirt, tshirt2, tshirt5, tshirtw, woman, woman2, woman3, woman4, woman6, woman7, refooter, rewoman } from "../../assets/photo/index";
import useCustomApi from '../../hooks/ApiHook';
import { Link } from 'react-router-dom';

const Trending = () => {

  const { data, error, loading, customFetchData } = useCustomApi();
  useEffect(() => {
    customFetchData('/products/mainpage/trendingproduct9', "GET", null, {}, "application/json");
  }, [])

  const first3Objects = data?.data?.slice(0, 3).map((element) => (
    <Link to={`/product/${element._id}`}>
    <div className='flex flex-row mt-4'>
      <div className='w-24 h-24 bg-gray-200  bg-cover' style={{ backgroundImage: `url(${element.image})` }}></div>

      <div className='flex flex-col pl-4 justify-center'>
        <div className='font-base font-Montserrat'>{element.productName}</div>
        <div className='flex text-yellow-400' ><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
        <div className='font-bold'>${element.price}</div>
      </div>

    </div>
    </Link>
  ))
  const second3Objects = data?.data?.slice(3, 6).map((element) => (
    <Link to={`/product/${element._id}`}>

    <div className='flex flex-row mt-4'>
      <div className='w-24 h-24 bg-gray-200  bg-cover' style={{ backgroundImage: `url(${element.image})` }}></div>

      <div className='flex flex-col pl-4 justify-center'>
        <div className='font-base font-Montserrat'>{element.productName}</div>
        <div className='flex text-yellow-400' ><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
        <div className='font-bold'>${element.price}</div>
      </div>

    </div>
    </Link>
  ))
  const third3Objects = data?.data?.slice(6, 9).map((element) => (
    <Link to={`/product/${element._id}`}>

    <div className='flex flex-row mt-4'>
      <div className='w-24 h-24 bg-gray-200  bg-cover' style={{ backgroundImage: `url(${element.image})` }}></div>

      <div className='flex flex-col pl-4 justify-center'>
        <div className='font-base font-Montserrat'>{element.productName}</div>
        <div className='flex text-yellow-400' ><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
        <div className='font-bold'>${element.price}</div>
      </div>

    </div>
    </Link>
  ))


  return (
    <div className='md:flex justify-center mx-12 mt-12'>



      <div className='w-full'>
        <p className='font-semibold text-xl border-b-2 inline-block border-orange-500 mb-4'>TOP TREND</p>
        {first3Objects}
      </div>



      <div className='w-full'>
        <p className='font-semibold text-xl border-b-2 inline-block border-orange-500 mb-4'>TOP TREND</p>

        {second3Objects}

      </div>


      <div className='w-full'>
        <p className='font-semibold text-xl border-b-2 inline-block border-orange-500 mb-4'>TOP TREND</p>

        {third3Objects}

      </div>

    </div>
  )
}

export default Trending