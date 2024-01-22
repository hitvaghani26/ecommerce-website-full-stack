import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useCustomApi from '../hooks/ApiHook';
import Loader from '../components/Loader';

const SignUp = () => {
  const { data, error, loading, customFetchData } = useCustomApi();

  const [signupDetails, setSignupDetails] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignupDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };
  const handleSignup = (event) => {
    event.preventDefault();
    customFetchData("/users/register", "POST", null, signupDetails, "application/json");
    console.log("Signup details:", signupDetails);
  };


  return (
    <div className="flex  flex-col justify-center px-6 py-12 lg:px-8 font-Montserrat relative min-h-screen min-w-screen">
     {!loading && <div className="sm:mx-auto sm:w-full sm:max-w-sm">

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register your account
        </h2>
      </div>}

      {!loading &&  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" >
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              User Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="username"
                type="text"
                value={signupDetails.username}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>


          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={signupDetails.email}
                onChange={handleChange}
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
                value={signupDetails.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className='bg-orange-500 rounded-md hover:bg-orange-600'>
            <button
              onClick={handleSignup}
              className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  bg-orange-600"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className='text-center mt-4' >
          Already customer? <span className='text-orange-500 cursor-pointer'>
            <Link to="/login" >click here.</Link>
          </span>
        </div>

      </div>}
      {loading && <div className='absolute w-full h-full flex justify-center items-center'>  
        <Loader />
        </div>}
    </div>
  )
}

export default SignUp