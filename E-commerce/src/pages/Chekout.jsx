import React from 'react'
import { woman1, bag1, bag2, bag3, bag5, couple1, couple2, fashion, fashion1, fashion2, femaleWatch, footer1, footer2, footer3, footer4, man, manWatch, manWatch2, manWatch3, manWatch4, pants1, pants2, photo, unsplash, tshirt, tshirt2, tshirt5, tshirtw, woman, woman2, woman3, woman4, woman6, woman7, refooter, rewoman } from "../assets/photo/index";
function Chekout() {
  return (
    <div>
      <div className='flex justify-between mx-8 mt-4 border-2 p-4 border-gray-600 rounded-lg'>
        <div className='flex flex-row '>
          <div className='product h-24 w-24 bg-cover bg-center rounded-md' style={{ backgroundImage: `url(${fashion2})` }}></div>
          <div>
            <p className='pl-4 font-bold'>Cloth Name</p>
          </div>
        </div>
        <div>
          <p className='font-bold '>$900</p>
          <div className='flex items-center mt-2 '>
            <p className='px-3 rounded-md font-extrabold  border-2 border-gray-300'>-</p>
            <p className='px-2'>1</p>
            <p className='px-3 rounded-md border-2 font-extrabold border-gray-300'>+</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-lg mx-auto p-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-medium mb-6">Payment Information</h2>
          <form>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                <input type="text" name="card-number" id="card-number" placeholder="0000 0000 0000 0000" className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-green-500" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700 mb-2">Expiration Date</label>
                <input type="text" name="expiration-date" id="expiration-date" placeholder="MM / YY" className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-green-500" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                <input type="text" name="cvv" id="cvv" placeholder="000" className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-green-500" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor="card-holder" className="block text-sm font-medium text-gray-700 mb-2">Card Holder</label>
                <input type="text" name="card-holder" id="card-holder" placeholder="Full Name" className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-green-500" />
              </div>
            </div>
            <div className="mt-8">
              <button type="submit" className="w-full bg-green-500 hover:bg-green-700 text-white font-medium py-3 rounded-lg focus:outline-none">
                Pay $900
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Chekout