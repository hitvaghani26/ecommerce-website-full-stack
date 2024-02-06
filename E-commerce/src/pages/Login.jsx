import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCustomApi from '../hooks/ApiHook';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/userslice';
import Loader from '../components/Loader';
import { setTotalItems } from '../store/wishlist';
import { setCartTotalItems } from '../store/cartSlice';
import Error from '../components/Error/Error';

const Login = () => {
  let { data: wishlistdata, error: wishlisterror, loading: wishlistloading, customFetchData: wishlistcustomFetchData } = useCustomApi();
  const { data: cartdata, error: carterror, loading: cartloading, customFetchData: cartcustomFetchData } = useCustomApi();
  const navigate = useNavigate();

  const { currentUserdata, isAuthenticated } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [showError, setShowError] = useState("");
  const { data, error, loading, customFetchData } = useCustomApi();
  const [loginDetail, setLoginDetail] = useState({
    user: "",
    password: "",
    email: ""
  });

  function handelError(message) {
    setShowError(message);
    setTimeout(() => {
      setShowError("")
    }, 3000);
  }

  useEffect(() => {
    if (data) {
      console.log("API response:", data?.data?.user?.username);
      dispatch(setUser(data?.data?.user));
      navigate("/")
    }

    
  }, [data, error]);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginDetail((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleLogin = async (event) => { 
    
    event.preventDefault();
    try{
    if (loginDetail.email === "" || loginDetail.password === "") {
      handelError("Please enter all fields");
      return;
    }
    await new Promise([
      customFetchData("/users/login", "POST", null, loginDetail, "application/json")
        .then(() => {
          wishlistcustomFetchData("/wishtlist/getwishlist", "POST", null, {}, "application/json")
        }).then(() => {
          cartcustomFetchData("/cart/carts", "GET", null, {}, "application/json")
        }).finally(() => {
        })

    ])
  }catch(error){
    handelError("Enter valid details")
  }

  };
  useEffect(() => {
    if (wishlistdata?.data) {
      console.log("API response new :", wishlistdata?.data);
      dispatch(setTotalItems(wishlistdata?.data?.length));

      // Handle the data as needed, for example, setYourStateVariable(data);
    }
  }, [wishlistdata])
  useEffect(() => {
    if (cartdata?.data?.cart) {
      console.log("API response new :", cartdata?.data?.cart?.products);
      dispatch(setCartTotalItems(cartdata?.data?.cart?.products?.length));

      // Handle the data as needed, for example, setYourStateVariable(data);
    }
  }, [cartdata])
  //  console.log(eo);

  return (
    <>


      <div className="flex  flex-col justify-center px-6 py-12 lg:px-8 relative min-h-screen min-w-screen">
        {!loading && <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>}

        {!loading && <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={loginDetail.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={loginDetail.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {showError == "" ? <div></div> :
              <div className='text-center text-red-700'>{showError}</div>}
            <div className='bg-orange-500 rounded-md hover:bg-orange-600'>
              <button
                onClick={handleLogin}
                type="submit"
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm bg-orange-600"
              >
                Log in
              </button>
            </div>

            {/* <div className='bg-orange-500 rounded-md hover:bg-orange-600'>
            <button
              onClick={handlegoogleLogin}
              type="submit"
              className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm bg-orange-600"
              >
              Sign in with Google
              </button>
            </div> */}
          </form>

          <div className='text-center mt-4'>
            New customer?{' '}
            <span className='text-orange-500 cursor-pointer'>
              <Link to="/signup">Start here.</Link>
            </span>
          </div>
        </div>}
        {loading && <div className='absolute w-full h-full flex justify-center items-center'>
          <Loader />
        </div>}
      </div>
    </>
  );
};

export default Login;
