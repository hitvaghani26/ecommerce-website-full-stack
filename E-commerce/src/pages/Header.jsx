import React, { useState,Fragment, useEffect } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { IoBagOutline, IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import { Link, Outlet, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser,logout } from '../store/userslice';  
import {setTotalItems} from '../store/wishlist';
import {setCartTotalItems} from "../store/cartSlice";
import useCustomApi from '../hooks/ApiHook';
// import { useDispatch, useSelector } from 'react-redux';
// import { setUser,logout } from '../store/userslice';
function Header() {
  const { currentUser, isAuthenticated } = useSelector(state => state.user);
  const { totalItems } = useSelector(state => state.wishlist);
  const carTotalItem = useSelector(state => state.cart.totalItems);
  const dispatch = useDispatch();
  const { data, error, loading, customFetchData } = useCustomApi();
  const { data:wishlistdata, error:wishlisterror, loading:wishlistloading, customFetchData:wishlistcustomFetchData } = useCustomApi();
  const { data:cartdata, error:carterror, loading:cartloading, customFetchData:cartcustomFetchData } = useCustomApi();

  const [showmenu, setShowmenu] = useState(false)
  function handlechangeMenu() {
    setShowmenu((element) => !element);
  }
  useEffect(() => {
    if(data?.statusCode == 200){
      dispatch(logout())
      dispatch(setTotalItems(0))
      dispatch(setCartTotalItems(0))
    }
  }, [data, error]);
  function handleLoutout(event) {
    event.preventDefault();
    customFetchData("/users/logout", "POST", null, {}, "application/json");
   
  }

  return (
    <>
    <div className='sticky top-0 z-50 '>

      <div className='header relative bg-white'>
        <div className='flex justify-between items-center py-2 font-Montserrat px-4' >
          <div className='logo font-dancing text-4xl font-bold'>Hshion</div>


          <div className='links hidden md:block'>
            <ul className='flex'>
              <li className='mx-4 '>
               
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    isActive ? 'border-b-2 border-orange-500' : ''
                  }
                  >
                  HOME
                </NavLink>
              </li>
              <li className='mx-4'>
                <NavLink
                  to="woman"
                  className={({ isActive }) =>
                  isActive ? 'border-b-2 border-orange-500' : ''
                }
                >
                  Woman
                </NavLink>

              </li>
              <li className='mx-4'>
             
                <NavLink
                  to="man"
                  className={({ isActive }) =>
                  isActive ? 'border-b-2 border-orange-500' : ''
                }
                >
                  MEN
                </NavLink>

              </li>
              <li className='mx-4'>
           
                <NavLink
                  to="allproduct"
                  className={({ isActive }) =>
                  isActive ? 'border-b-2 border-orange-500' : ''
                }
                >
                  All Product
                </NavLink>

              </li>
            </ul>
          </div>

          <div className='hidden md:block'>
            <ul className='links flex items-center'>
              {isAuthenticated ?  
              <li className='mx-1 font-light' onClick={handleLoutout}><Link to="/login">Logout</Link> </li> 
              :
              <React.Fragment>
                  <li className='mx-1 font-light'><Link to="/login">Login</Link> </li>
              <li className='mx-1 font-light'>/</li>
              <li className='mx-1 font-light'><Link to="/signup">Register</Link></li>
                </React.Fragment>}
            
              <li className='mx-1 relative font-light'>
                <Link to="/favorite"><FaRegHeart size={20} /></Link>

                <p className='absolute text-xs top-[-8px] text-white bg-black rounded-full px-1 right-0'>{totalItems}</p>
              </li>


              <li className='mx-1 relative font-light'>
                <Link to="/checkout"><IoBagOutline size={20} /></Link>

                <p className='absolute text-xs top-[-8px] text-white bg-black rounded-full px-1 right-0'>{carTotalItem}</p>

              </li>
            </ul>
          </div>

          <div className='hammenu md:hidden ' onClick={handlechangeMenu}>

            {showmenu ?
              <IoClose size={30} /> :
              <RxHamburgerMenu size={30} />}
          </div>

        </div>
        {showmenu &&
          <div>
            <div className=' w-full  bg-orange-950 opacity-50 text-white'>
              <ul className='flex-row py-8 justify-center items-center h-full'>
                <li className='mx-4 my-4 text-center'><Link to="/">HOME</Link> </li>
                <li className='mx-4 my-4 text-center'> <Link to="/woman">WOMAN</Link> </li>
                <li className='mx-4 my-4 text-center'><Link to="/man">MEN</Link> </li>
                <li className='mx-4 my-4 text-center'><Link to="/allproduct">All Product</Link> </li>
                <li className='mx-4 my-4 text-center'><Link to="/favorite">Favorite</Link> </li>
                <li className='mx-4 my-4 text-center'><Link to="/checkout">check Out</Link> </li>
              </ul>
            </div>
          </div>}







      </div>
            </div>
    </>
  );
}

export default Header;
