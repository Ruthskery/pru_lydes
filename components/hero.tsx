import React from 'react';
import { poppins } from '@/public/fonts/fonts';

const Hero = () => {
  return (
    <section className="w-full h-236 relative grid md:grid-cols-2 w-full h-220 bg-[#f0f0f0] flex flex-col justify-center items-start md:items-center">
      <div className={`${poppins.className} relative top-13 md:top-0 text-center md:text-left md:ml-20 2xl:ml-40 z-2`}> 
        <h1 className="md:text-7xl 2xl:m-w-350 md:w-300 font-semibold text-4xl mt-7 md:max-w-md 2xl:max-w-300">CHALCEDONY DIAMOND</h1>
        <p className="font-light text-lg md:text-2xl md:max-w-auto xl:m-w-350 mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className="mt-6 px-6 py-3 md:px-10 md:py-5 text-lg md:text-2xl bg-yellow-500 shadow-lg shadow-yellow-500/50 rounded-full cursor-pointer">
          Get in Touch
        </button>
      </div>
        <div className="w-full flex justify-center items-center"> 
          <img className='absolute h-120 md:h-170 2xl:h-200 z-2 flex bottom-0' src="/fulllydes.png" alt="" />
          <img className='opacity-25 absolute h-80 md:h-120 2xl:h-150 bottom-0 right-0' src="/bilog.png"/>
        </div>
        
        <div className="absolute">
          
        </div>  
    </section>
  );
};


export default Hero;
