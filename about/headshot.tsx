import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import H1 from '../public/src/hs1.jpg';
import H2 from '../public/src/hs2.jpg';
import H3 from '../public/src/hs3.jpg';
import H4 from '../public/src/hs4.jpg';
import H5 from '../public/src/hs5.jpg';

const headshotImages = [H1, H2, H3, H4, H5];

const Headshot = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % headshotImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + headshotImages.length) % headshotImages.length
    );
  };

  // Swipe detection
  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX && e.changedTouches[0].clientX) {
      const delta = touchStartX - e.changedTouches[0].clientX;
      if (delta > 50) handleNext(); // swipe left
      if (delta < -50) handlePrev(); // swipe right
    }
  };
  
  return (
    <div className="w-full h-[50vh] flex justify-center bg-[#14110F] relative pt-2 md:pt-5 px-4">
      
      {/* Title */}
      <div className="absolute left-15 text-white font-black text-xl sm:text-2xl md:text-4xl lg:text-5xl">
        Stories in Frames
      </div>

      {/* --- MOBILE VERSION --- */}
      <div className="flex justify-center w-full sm:hidden relative">

      {/* Swipeable Image */}
      <div
        className="w-[300px] h-[300px] rounded-xl overflow-hidden border-4 border-[#E1B951]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={headshotImages[currentImageIndex]}
          alt={`Headshot ${currentImageIndex + 1}`}
          width={250}
          height={250}
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </div>

      {/* --- DESKTOP VERSION --- */}
      <div className="hidden sm:flex gap-10 relative w-full justify-center items-center">

        {/* Left Arrow */}
        <button 
          className="absolute left-10 top-2/4 transform -translate-y-1/2 text-[#E1B951] hover:scale-110 transition"
          onClick={handlePrev}
        >
          <ChevronLeft size={30} />
        </button>

        {headshotImages.map((img, index) => (
          <div
            key={index}
            className="w-[200px] sm:w-[240px] md:w-[300px] h-[200px] sm:h-[240px] md:h-[300px] rounded-xl overflow-hidden border-4 border-[#E1B951]"
          >
            <Image
              src={img}
              alt={`Headshot ${index + 1}`}
              width={300}
              height={300}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        ))}

         {/* Right Arrow */}
         <button 
          className="absolute right-10 top-2/4 transform -translate-y-1/2 text-[#E1B951] hover:scale-110 transition"
          onClick={handleNext}
        >
          <ChevronRight size={30} />
        </button>

      </div>
    </div>
  );
};

export default Headshot;
