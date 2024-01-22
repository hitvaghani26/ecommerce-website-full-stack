import React from 'react'

function Footer() {
  return (
    <>
          <div className='footer  md:flex justify-center mt-8 bg-slate-100 py-4 px-4'>
        <div className='md:w-5/6 w-full mt-4 '>
          <p className='text-2xl font-extrabold font-dancing '>Hshion</p>
          <p className='text-sm mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, enim necessitatibus inventore molestiae dicta nihil veritati
          </p>
        </div>
        <div className='md:w-1/6 w-full mt-4 md:mt-0'>
          <p className='text-xl font-Montserrat font-semibold'>QUIK LINKS</p>
          <ul className='mt-4'>
            <li>About</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='md:w-1/6 w-full mt-4 md:mt-0'>
          <p className='text-xl font-Montserrat font-semibold'>ACCOUNT</p>
          <ul className='mt-4'>
            <li>My Account</li>
            <li>Orders Tracking</li>
            <li>Checkout</li>
            <li>Wishlist</li>
          </ul>
        </div>
        <div className='md:w-1/6 w-full mt-4 md:mt-0'>
          <p className='text-xl font-Montserrat font-semibold'>NEWSLETTER</p>
          <div className=' flex  border-2 border-gray-300 mt-4'>



            <input className='outline-none w-4/6' type="text" />



            <button className=' py-1 bg-rose-700 text-white w-2/6'>Subscribe</button>



          </div>
        </div>

      </div>
      <div className='text-center font-light'>
        Copy right 2024
      </div>
      </>
  )
}

export default Footer