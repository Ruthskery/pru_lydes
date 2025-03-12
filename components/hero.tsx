import React from 'react';
import { poppins } from '@/public/fonts/fonts';
import Image from 'next/image';

export function Lady() {
  return (
    <div className="max-w-[450px] w-full">
      <Image
        src="/fulllydes.png"
        width={450}
        height={450}
        alt="Picture of the author"
        className="w-full h-auto"
      />
    </div>
  );
}

export function Bilog() {
  return (
    <div className="max-w-[750px] w-full">
      <Image
        src="/bilog.png"
        width={750}
        height={550}
        alt="Picture of the author"
        className="w-full h-auto"
      />
    </div>
  );
}

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-[#f0f0f0] flex flex-col md:flex-row items-center justify-center relative p-8">
      <div className={`${poppins.className} text-center md:text-left max-w-2xl z-10 md:pr-20`}> 
        <h1 className="md:text-7xl font-semibold">CHALCEDONY DIAMOND</h1>
        <p className="text-lg md:text-2xl mt-4 font-light max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className="mt-6 px-6 py-3 md:px-10 md:py-5 text-lg md:text-2xl bg-yellow-500 shadow-lg shadow-yellow-500/50 rounded-full cursor-pointer">
          Get in Touch
        </button>
      </div>
      
      <div className="relative w-full max-w-lg bottom-0 flex justify-center md:absolute md:right-60 md:bottom-8 z-10 translate-y-8">
        <Lady />
      </div>
      
      <div className="absolute right-0 bottom-0 w-full max-w-xl z-0">
        <Bilog />
      </div>
    </section>
  );
};

export default Hero;
