import React, { useState, useEffect } from "react";

const sliderData = [
  {
    image: "src/assets/Images/4i.jpg",
  },
  {
    image: "src/assets/Images/3i.jpg",
  },
  {
    image: "src/assets/Images/2i.jpg",
  },
  {
    image: "src/assets/Images/1i.jpg",
  },
];

export default function SliderFooter() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Handle manual slide change
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Navigate to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-[1170px] h-[400px] mb-[50px] mx-auto mt-8 overflow-hidden rounded-lg shadow-lg">
      {/* Images */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {sliderData.map((slide, index) => (
          <div key={index} className="min-w-full flex-shrink-0">
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full h-[400px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-neutral-500 text-white p-2 px-4 rounded-full cursor-pointer hover:bg-gray-600"
        onClick={prevSlide}
      >
        &#8249;
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-neutral-500 text-white p-2 px-4 rounded-full cursor-pointer hover:bg-gray-600"
        onClick={nextSlide}
      >
        &#8250;
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-neutral-500 p-2 rounded-md">
        {sliderData.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-300"
            } cursor-pointer`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
