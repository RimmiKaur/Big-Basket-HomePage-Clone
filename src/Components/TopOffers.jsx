import React from 'react'
import img1 from '../assets/Images/1c.jpg';
import img2 from '../assets/Images/2c.jpg';
import img3 from '../assets/Images/3c.jpg';
import img4 from '../assets/Images/4c.jpg';

import img1d from '../assets/Images/1d.jpg';
import img2d from '../assets/Images/2d.jpg';
import img3d from '../assets/Images/3d.jpg';
import img4d from '../assets/Images/4d.jpg';

import img1g from '../assets/Images/1g.jpg';
import img2g from '../assets/Images/2g.jpg';
import img3g from '../assets/Images/3g.jpg';
import img4g from '../assets/Images/4g.jpg';

import img1h from '../assets/Images/1g.jpg';
import img2h from '../assets/Images/2g.jpg';
import img3h from '../assets/Images/3g.jpg';
import img4h from '../assets/Images/4g.jpg';
import img5h from '../assets/Images/5h.jpg';
import img6h from '../assets/Images/6h.jpg';



import DailyStaples from './DailyStaples';

export default function TopOffers() {
  return (
        <>
        <div className='w-[1170px] m-auto mb-6 '>
            <p className='font-bold text-[22px] mt-6 ml-5'>Top Offers</p>

            <div className='flex gap-11 mt-4'>
                <img src={img1}  className='ml-1 w-[257px] h-[200px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
                <img src={img2} className='w-[257px] h-[200px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
                <img src={img3} className='w-[257px] h-[200px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
                <img src={img4} className='w-[257px] h-[200px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>

            </div>

        </div>


        <div className='w-[1170px] m-auto mb-6 '>
        <p className='font-bold text-[22px] mt-6 ml-5'>Fruits and Vegetables</p>

        <div className='flex gap-11 mt-4'>
            <img src={img1d}  className='ml-1 w-[257px] h-[200px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
            <img src={img2d} className='w-[257px] h-[200px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
            <img src={img3d} className='w-[257px] h-[200px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
            <img src={img4d} className='w-[257px] h-[200px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>

        </div>

        <DailyStaples/>

        <p className='font-bold text-[22px] mt-6 ml-5'>Cleaning HouseHold</p>

        <div className='flex gap-11 mt-4'>
            <img src={img1g}  className='ml-1 w-[257px] h-[200px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
            <img src={img2g} className='w-[257px] h-[200px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
            <img src={img3g} className='w-[257px] h-[200px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
            <img src={img4g} className='w-[257px] h-[200px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>

        </div>


        <p className='font-bold text-[22px] mt-6 ml-5'>Beauty and Hygiene</p>

        <div className='flex gap-4 mt-4'>
            <img src={img1h}  className='ml-1 w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
            <img src={img2h} className='w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
            <img src={img3h} className='w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
            <img src={img4h} className='w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
            <img src={img5h} className='w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
            <img src={img6h} className='w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>

        </div>

        <p className='font-bold text-[22px] mt-6 ml-5'>Home and Kitchen</p>

        <div className='flex gap-4 mt-4'>
            <img src={img1h}  className='ml-1 w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
            <img src={img2h} className='w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
            <img src={img3h} className='w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
            <img src={img4h} className='w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
            <img src={img5h} className='w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>
            <img src={img6h} className='w-[180px] h-[140px] shadow-md rounded-md cursor-pointer hover:shadow-2xl transition-shadow duration-300'/>

        </div>

    </div>
    </>
  )
}
