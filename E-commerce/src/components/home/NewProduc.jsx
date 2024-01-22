import React, { useEffect, useState } from 'react'
import { IoIosStar } from "react-icons/io";
import useCustomApi from '../../hooks/ApiHook';
import { IoFilter } from "react-icons/io5";
import { Link } from 'react-router-dom';

const NewProduc = () => {
  const [showFilter, setShowFilter] = useState(false);
  function handleFilterChange() {
    setShowFilter((element) => !element);

  }
  const { data: data1, error: error1, loading: loading1, customFetchData: customFetchData1 } = useCustomApi();

  function handleType(type) {
    customFetchData1(`/products/mainpage/newproduct8/${type}`, "GET", null, {}, "application/json");
  }
  useEffect(() => {

    customFetchData1(`/products/mainpage/newproduct8`, "GET", null, {}, "application/json");


  }, [])

  return (


    <div className='mx-12 my-4'>

      {/* this is link section  */}
      <div className='product-link-section flex justify-between '>
      <h2 className='md:text-3xl sm:text-base font-semibold'>New product</h2>
        <div className='links hidden md:block'>

          <ul className='flex'>
            <li className='mx-4' onClick={() => handleType('all')}>All</li>
            <li className='mx-4' onClick={() => handleType('woman')}>WOMAN</li>
            <li className='mx-4' onClick={() => handleType('man')}>MEN</li>
          </ul>
        </div>
        <div className='links    md:hidden'>
          <p className='flex  items-center text-sm gap-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.5)] rounded-md px-2 py-2' onClick={handleFilterChange}>
            Filter <span className='text-orange-500'><IoFilter /></span>
          </p>
          {showFilter && <>
            <div className='w-full text-sm gap-2 flex flex-col justify-center py-1 items-start mt-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md px-3'>
              <p className='font-Montserrat border-b-2 inline-block w-full text-center' onClick={() => handleType('all')}>All</p>
              <p className='font-Montserrat border-b-2 inline-block w-full text-center' onClick={() => handleType('woman')}>WOMAN</p>
              <p className='font-Montserrat border-b-2 inline-block w-full text-center' onClick={() => handleType('man')}>MEN</p>
              <div className='ml-3 mt-2'>
              </div>
            </div>
          </>
          }
        </div>
      </div>
      {/* this is product card section  */}


      <div className='md:flex justify-between w-full  md:mt-0 mt-4   flex-wrap'>
        {data1?.data && data1.data.map((product) => (
          <Link to={`/product/${product._id}`} className='p-1 md:p-2 md:w-1/4    bg-cover'>
          <div className=' ' >
            <div className='h-72 w-full   bg-contain bg-no-repeat bg-center' style={{ backgroundImage: `url(${product.image})` }}></div>
            <h3 className='text-center text-sm font-base font-Montserrat mt-3'>{product.productName}</h3>
            <div className='text-center flex justify-center text-sm text-gray-700' ><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
            <h2 className='text-lg font-bold text-center'>${product.price}</h2>
          </div>
          </Link>

        ))}




      </div>
    </div>
  )
}

export default NewProduc