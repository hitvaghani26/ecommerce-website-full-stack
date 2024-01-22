import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { CiSquareCheck } from "react-icons/ci";
import { IoSquareOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const EditCard = ({ id, type, name, price, description, image, isForSale, tags, gender }) => {
  let newTags = tags.split(', ').map(tag => `#${tag}`).join(" ").split(" ")
  console.log(newTags);
  const genderColor = gender === 'man' ? 'blue' : (gender === 'woman' ? 'deeppink' : 'black');
  const genderStyle = {
    color: genderColor,
  };






  return (
    <div className='  m-4   shadow-xl  rounded-xl '>
      <div className='relative'>

        <img src={image} className='shadow-md rounded-xl max-h-64 m-auto font-Montserrat relative'></img>
        <p className='absolute top-2 left-2 bg-gray-600 rounded-lg px-2 text-white'>{type}</p>
      </div>
      <div className='mt-2 p-2 '>
        <p className='font-bold text-xl uppercase'>{name}</p>
        <p className='font-semibold'>${price}</p>
        <p className='mt-3 text-sm'>{description.length > 100 ? `${description.slice(0, 100)}..Read more` : description}</p>
        <p className='mt-1 text-sm flex items-center '>
          For Sale:

          {isForSale ? <CiSquareCheck size={20} className='mt-1 text-green-500 ' /> : <IoSquareOutline size={20} className='ml-2 text-red-500 ' />}
        </p>
        <p className='mt-1 text-sm'>Gender: <span style={genderStyle} className='border-2 px-2 capitalize
           rounded-lg'>{gender}</span></p>
        <div className='flex flex-wrap text-xs'>

          {newTags.map((item, index) => (
            <p key={index} className='m-1 border-2 p-1 rounded-lg border-gray-400'> {item} </p>
          ))}
        </div>
        <div className='flex flex-col '>

          <Link to={`/admin/edit/${id}`}>
            <button className='px-4 py-2 mt-2 border-2 bg-green-500 font-bold text-white capitalize items-end rounded-lg'>edit</button>
          </Link>
          {/* <button className='px-4 py-2 mt-2 border-2 bg-red-500 font-bold text-white capitalize items-end rounded-lg '>Delete</button> */}
        </div>

      </div>
    </div>
  )
}

export default EditCard