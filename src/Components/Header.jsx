import React from 'react'
import logo from '../assets/images/logo.png'
import smartbasket from '../assets/images/Smart_basket.png'
import  offers from '../assets/images/offers.png'

import { CiSearch } from 'react-icons/ci';
import { FaCartArrowDown, FaLocationDot } from 'react-icons/fa6';
import { IoMdArrowDropdown } from 'react-icons/io';


export default function Header() {
    return (
        <>
            <div className='shadow-md pb-2 top-0 left-0 fixed z-10 w-full bg-white '>
                <div className='h-[3px] bg-lime-600 mb-2'></div>
                <div >
                    <div className='w-[1170px] m-auto flex gap-[30px] mb-4'>
                        <img src={logo} className='  w-[100px]' />
                        <div className="flex items-center border w-[600px]  border-lime-600 rounded-lg overflow-hidden shadow-sm focus-within:border-lime-600 focus-within:ring-1 focus-within:ring-lime-600">
                            <button className="p-3 ">
                                <CiSearch className=' text-lime-600 font-bold' />
                            </button>
                            <input
                                type="text"
                                placeholder="Search for Products..."
                                className="flex-grow    text-gray-700 focus:outline-none"
                            />
                        </div>

                        <div className='bg-gray-100  flex p-2 px-4 gap-2 rounded-lg'>
                            <FaLocationDot className='mt-1 ' />
                            <p>Select Location</p>
                        </div>


                        <div className='bg-black text-white p-2 px-4 gap-2 rounded-lg'>
                            <p>Login/Sign Up</p>
                        </div>


                        <div className='bg-red-100 p-3 px-4 gap-2 rounded-lg'>
                            <FaCartArrowDown className="text-red-800" />
                        </div>

                    </div>
                </div>
                <div className='w-[1170px] m-auto flex gap-[30px] pt-2 justify-between ' >
                    <button
                        className="bg-lime-600   mt-[-5px] p-1 px-2 flex items-center rounded-lg border-2 border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 text-sm md:text-base lg:text-lg">
                        <span className="text-white text-[15px]">Shop By Category</span>
                        <IoMdArrowDropdown
                            className="text-white ml-2 transform transition-transform duration-300 hover:rotate-180"
                        />
                    </button>

                    <a href='#'>
                        <p>Exotic Fruits</p>
                    </a>
                    <a href='#'>
                        <p>Tea</p>
                    </a>
                    <a  href='#'>
                        <p>Ghee</p>
                    </a>
                    <a  href='#'>
                        <p>Nandini</p>
                    </a>
                    <a  href='#'>
                        <p>Fresh Vegetables </p>
                    </a>
                    <img className='h-[30px] box-border' src={smartbasket}/>
                    <img className='h-[30px] box-border'  src={offers}/>

                </div>
            </div>
        </>
    )
}
