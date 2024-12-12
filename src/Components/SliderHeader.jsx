import React, { useState, useEffect } from "react";
import sliderData from "../Data/sliderData";
import eggsMeatData from "../Data/eggsMeatData";

export default function SliderHeader() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Automatically slide images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Handle sliding to the next slide
  const handleNextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
      setIsAnimating(false);
    }, 500); // Match the transition duration
  };

  // Handle manual click to go to a specific slide
  const handleSlideChange = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 500); // Match the transition duration
  };

  return (
   <>
        <div className="w-[1170px] m-auto  rounded-xl relative shadow-md mt-[150px] overflow-hidden">
            {/* Image Slider */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {sliderData.map((slide, index) => (
                <img
                    key={index}
                    src={slide.images}
                    alt={slide.title}
                    className="w-full flex-shrink-0 rounded-xl"
                />
                ))}
            </div>

            {/* Bottom Indicator and Details */}
            <div className="absolute bottom-0 bg-white m-auto right-[340px] flex shadow-lg rounded-t-xl">
                {sliderData.map((v, i) => (
                <div
                    key={i}
                    onClick={() => handleSlideChange(i)}
                    className="cursor-pointer"
                >
                    <div className="flex">
                    <div className="px-4 pt-2 box-border text-center">
                        <p className="font-bold text-[17px]">{v.title}</p>
                        <p className="text-gray-500 text-[12px]">{v.description}</p>
                    </div>
                    {i === sliderData.length - 1 ? (
                        <div className="h-[60px] w-0 bg-gray-200"></div>
                        ) : (
                        <div className="h-[60px] w-1 bg-gray-200"></div>
                        )}
                    </div>
                    {/* Highlighted Indicator */}
                    <div
                    className={`h-[3px] ${
                        currentIndex === i ? "bg-lime-600" : "bg-gray-200"
                    } transition-all duration-300`}
                    ></div>
                </div>
                ))}
            </div>
            </div>
            <div className="mt-8 mb-8 flex justify-between w-[1170px] mx-auto">
                {
                    eggsMeatData.map((v,i) => {
                        return (
                            <img className="w-[150px]" src={v.image}/>
                        )
                    })
                }
            </div>
   </>
    
  );
}

