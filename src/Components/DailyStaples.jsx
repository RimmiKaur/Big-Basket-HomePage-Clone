import React from 'react'

import img1 from '../assets/Images/1e.jpg';
import img2 from '../assets/Images/2e.jpg';
import img3 from '../assets/Images/3e.jpg';
import img4 from '../assets/Images/4e.jpg';
import img5 from '../assets/Images/5e.jpg';
import img6 from '../assets/Images/6e.jpg';

import img1f from '../assets/Images/1f.jpg';
import img2f from '../assets/Images/2f.jpg';
import img3f from '../assets/Images/3f.jpg';
import img4f from '../assets/Images/4f.jpg';
import img5f from '../assets/Images/5f.jpg';
import img6f from '../assets/Images/6f.jpg';

export default function DailyStaples() {
  return (
    <>
        <div className='w-[1170px] m-auto mb-6 '>
                <p className='font-bold text-[22px] mt-6 ml-5'>Your Daily Staples</p>

                <div className='flex gap-4 mt-4'>
                    <img src={img1}  className='ml-1 w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
                    <img src={img2} className='w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
                    <img src={img3} className='w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
                    <img src={img4} className='w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
                    <img src={img5} className='w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
                    <img src={img6} className='w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>

                </div>

                <p className='font-bold text-[22px] mt-6 ml-5'>Beverages</p>

                <div className='flex gap-4 mt-4'>
                    <img src={img1f}  className='ml-1 w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
                    <img src={img2f} className='w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
                    <img src={img3f} className='w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
                    <img src={img4f} className='w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
                    <img src={img5f} className='w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
                    <img src={img6f} className='w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>

                </div>

        </div>
        
    </>
  )
}
