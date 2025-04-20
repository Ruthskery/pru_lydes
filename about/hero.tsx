import React from 'react';
import Image from 'next/image';
import lydes from '../public/src/aboutme.jpg';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[#14110F] px-4 py-10 sm:px-6 md:px-12">
      
      {/* Title */}
      <div className="text-center mt-30 mb-6 md:mt-30 md:mb-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-[#E1B951] to-[#96700f] bg-clip-text text-transparent">
          About Me
        </h1>
      </div>

      {/* Top Line Break */}
      <hr className="my-4 border-t-2 border-white w-3/4" />

      {/* Image and Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-10 md:mt-[60px] md:mb-[60px] md:mr-[200px] md:ml-[40px] items-center">
        
        {/* Image */}
        <div className="flex justify-center">
          <Image 
            src={lydes}
            alt="Lydes" 
            className="rounded-lg object-cover" 
            width={400} 
            height={400} 
            priority
          />
        </div>

        {/* Content */}
        <div className="flex flex-col space-y-4 text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center md:text-left">
            Lydelyn Romero Quitong
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#E1B951] text-center md:text-left">
            Trusted Financial Consultant | Pru Life UK
          </h3>
          <p className="text-base sm:text-lg md:text-xl font-light text-justify">
            Lydes, a top financial consultant at Pru Life UK, is recognized nationwide for her expertise in strategic financial planning. With years of experience and a deep passion for empowering others, she has helped countless individuals and families take control of their finances and build secure, meaningful futures.
          </p>
          <p className="text-base sm:text-lg md:text-xl font-light text-justify">
            Beyond her professional accolades, Lydes believes in the power of education and connection. She takes pride in making financial planning simple, accessible, and meaningful. With every client, her mission remains the same: to guide, to inspire, and to deliver a future that feels secure and well-prepared.
          </p>
          <p className="italic text-white text-justify text-sm sm:text-base md:text-lg mt-4">
            “Your dreams matter. Let’s turn them into a plan—and that plan into peace of mind.”
          </p>
          <p className="text-sm sm:text-base md:text-lg text-white text-justify">
            - Lydelyn Romero Quitong
          </p>
        </div>
      </div>

      {/* Bottom Line Break */}
      <hr className="my-10 border-t-2 border-white w-3/4" />
    </section>
  );
};

export default Hero;
