import React from 'react'
import SmartBasketCart from './SmartBasketCart'
import img1 from '../assets/Images/1b.jpg';
import img2 from '../assets/Images/2b.jpg';
import img3 from '../assets/Images/3b.jpg';
import img4 from '../assets/Images/4b.jpg';


export default function SmartMarketSection({heading}) {
  return (
    <div className='w-[1170px] m-auto bg-gray-100 z-0 py-8 mb-4'>
        <div className='flex justify-between mx-8'>
            <p className='font-bold text-[20px]'>{heading}</p>
            <p className='underline'>View All </p>
        </div>
        <div className='flex flex-wrap'>
            <SmartBasketCart img={img1} item='Beans - French, Ring (Loose)' price1='₹96.44' price2='₹120.55' percentage='20% OFF'/>
            <SmartBasketCart img={img2} item='Carrot - Orange (Loose)' price1='₹44.5' price2='₹104.11' percentage='57% OFF'/>
            <SmartBasketCart img={img3} item='Chilli - Green Long (Loose)' price1='₹76.61' price2='₹95.89' percentage='20% OFF'/>
            <SmartBasketCart img={img4} item='Carrot - Orange (Loose)' price1='₹200' price2='' percentage=''/>
        </div>
    </div>
  )
}
