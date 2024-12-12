import React from 'react'
import { FaRegBookmark } from 'react-icons/fa6'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function ( {img ,item, price1, price2, percentage}) {
  return (
    <div className='p-3 rounded-xl shadow-xl m-5 w-[250px] bg-white'>
        <div className='p-4 border border-gray-300 rounded-xl relative'>
            <img src={img} className='w-[500px] cursor-pointer'/>
            <div className={`text-white bg-lime-600 rounded-ss-md rounded-ee-md w-[80px] absolute top-[15px] ${percentage === "" ? "p-0 px-0" : "p-1 px-2"}`}>
                {percentage}
            </div>
        </div>

        <div className='mt-8'>
            <p className='text-gray-400'>fresho!</p>
            <p>{item}</p>
        </div>

        <div className='flex m-auto border mt-6 mb-2 border-gray-400 p-1 rounded-md cursor-pointer'>
            <p>1kg</p>
            <MdKeyboardArrowDown className='mt-1 ml-[160px]'/>    
        </div>

        <div className='flex'>
            <p>{price1}</p>
            <span className='line-through text-[13px] mt-1'>{price2}</span>
        </div>

        <div className='flex mt-[80px] mb-3'>
            <div className='p-2 border rounded-md border-gray-400 w-9 text-black cursor-pointer'>
                <FaRegBookmark/>
            </div>
            <div className=' ml-1 rounded-md border  text-center pt-1 border-red-900 cursor-pointer hover:bg-red-900'>
                <p className='text-red-900 w-[180px] hover:text-white '>Add</p>
            </div>
        </div>
    </div>
  )
}
