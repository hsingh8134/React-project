import React, { useState, useEffect } from "react";
import imageUrls from './const.jsx'

const SlidingNav = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); 

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="relative w-full flex items-center justify-center bg-black overflow-hidden">

      <div className="flex transition-transform duration-700 ease-in-out w-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

        {imageUrls.map((url, index) => (<div key={index} className="min-w-full flex items-center justify-center">
           
            <img src={url} className="w-full h-auto max-h-[400px] object-cover"/>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingNav;