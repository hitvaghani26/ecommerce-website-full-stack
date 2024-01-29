import React, { useState, useEffect } from 'react'
import { IoIosStar } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import useCustomApi from '../../hooks/ApiHook';
import Loader from '../Loader';
import { Link } from 'react-router-dom';



const ShowProduct = ({ category }) => {
  const { data, error, loading, customFetchData } = useCustomApi();


  const [checkedOption, setCheckedOption] = useState();
  const [showFilter, setShowFilter] = useState(false);
  function handleFilterChange() {
    setShowFilter((element) => !element);

  }

  function handleChecked(option) {
    setCheckedOption((prev) => (prev === option ? "noselect" : option));

  };
  useEffect(() => {
    console.log("hello");

    if (checkedOption == "Newest") {
      customFetchData(`/products/getproductby/${category}/new`, "GET", null, {}, "application/json");
    }
    else if (checkedOption == "Oldest") {
      customFetchData(`/products/getproductby/${category}/old`, "GET", null, {}, "application/json");
    }
    else if (checkedOption == "Price (Lowest)") {
      customFetchData(`/products/getproductby/${category}/pricelow`, "GET", null, {}, "application/json");
    }
    else if (checkedOption == "Price (Highest)") {
      customFetchData(`/products/getproductby/${category}/pricehigh`, "GET", null, {}, "application/json");
    }
    else if (checkedOption == "A-Z") {
      customFetchData(`/products/getproductby/${category}/atoz`, "GET", null, {}, "application/json");
    }
    else if (checkedOption == "Z-A") {
      customFetchData(`/products/getproductby/${category}/ztoa`, "GET", null, {}, "application/json");
    }
  }, [checkedOption]);

  useEffect(() => {
    if (category == 'man') {
      customFetchData("/products/getmanproduct", "GET", null, {}, "application/json");
    }
    else if (category == "woman") {
      customFetchData("/products/getwomanproduct", "GET", null, {}, "application/json");

    }
    else if (category == "All") {
      customFetchData("/products/getproducts", "GET", null, {}, "application/json");
    }
    console.log("use effect call");
  }, [])


  return (
    <div className='grid grid-cols-12 font-Montserrat'>
      <div className='col-span-0 hidden md:block  md:col-span-2 my-6 p-1'>
        <div className='hidden md:block ml-1'>
          <p className='font-semibold  font-Montserrat'>Sort By</p>
          <div className='ml-3 mt-2'>
            {['Newest', 'Oldest (default)', 'Price (Lowest)', 'Price (Highest)', 'A-Z', 'Z-A'].map((element, index) => (
              <div className='flex items-center text-sm mt-1'>
                <input type="checkbox"
                  className='focus:outline-orange-500 checked:bg-orange-500'
                  name={element}
                  id={element}
                  checked={checkedOption === element}
                  onChange={() => handleChecked(element)} />
                <label className='ml-2'>{element}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='col-span-12 md:col-span-10 my-4'>

        {/* this is link section  */}
        <div className='product-link-section flex items-center justify-between mx-8 md:mx-0 '>
          <p className='sm:text-sm md:text-xl font-semibold'>{category}'s product</p>
          <div className=' md:hidden'>

            <p className='flex  items-center gap-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.5)] rounded-md px-2 py-2' onClick={handleFilterChange}>
              Filter <span className='text-orange-500'><IoFilter /></span>
            </p>
          </div>
        </div>
        {showFilter && <>
          <div className='w-full flex flex-col justify-center items-start mt-3'>
            <p className='font-semibold  font-Montserrat'>Sort By</p>
            <div className='ml-3 mt-2'>
              {['Newest', 'Oldest', 'Price (Lowest)', 'Price (Highest)', 'A-Z', 'Z-A'].map((element, index) => (
                <div className='flex items-center text-sm mt-1'>
                  <input type="checkbox"
                    className='focus:outline-orange-500 checked:bg-orange-500'
                    name={element}
                    id={element}
                    checked={checkedOption === element}
                    onChange={() => handleChecked(element)} />
                  <label className='ml-2'>{element}</label>
                </div>
              ))}
            </div>
          </div>
        </>}
        {/* this is product card section  */}
        <div className='md:flex justify-between w-full  md:mt-0 mt-4   flex-wrap'>
          {
            loading && <Loader />
          }
          {data?.data && data?.data.map((product) => (
            <>
              <Link to={`/product/${product._id}`} className='p-1 md:p-2 md:w-1/3    bg-cover'>

              
                  <div className='h-72 w-full   bg-contain bg-no-repeat bg-center' style={{ backgroundImage: `url(${product.image})` }}></div>
                  <h3 className='text-center text-sm font-base font-Montserrat mt-3'>{product.productName}</h3>
                  <div className='text-center flex justify-center text-sm text-gray-700' ><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></div>
                  <h2 className='text-lg font-bold text-center'>${product.price}</h2>
                
              </Link>
            </>
          ))}

        </div>

      </div>
    </div>
  )
}

export default ShowProduct