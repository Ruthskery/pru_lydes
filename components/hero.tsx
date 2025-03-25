import React from 'react';
import { poppins } from '@/public/fonts/fonts';
import maambg from '../public/maambg.jpg';
import Button from './button'; // Import your Button component here

const Hero = () => {
  return (
    <div className="w-full h-250 md:h-236 relative grid md:grid-cols-2 flex flex-col justify-center items-start md:items-center">
      <div
        className="bg-initial absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${maambg.src})`,
        }}
      ></div>

      <div className={`${poppins.className} relative top-20 md:top-0 text-center md:text-left md:ml-20 2xl:ml-40 z-2`}>
        <h1 className="md:text-7xl 2xl:m-w-350 md:w-300 font-semibold text-4xl mt-7 md:max-w-md 2xl:max-w-300">
          CHALCEDONY <span className="text-yellow-500">DIAMOND</span>
        </h1>
        <p className="font-light text-lg md:text-2xl md:max-w-auto xl:max-w-150 mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="flex justify-center md:justify-start flex-col md:flex-row z-4 md:mt-5 px-6 md:px-0">
          {/* Replace the old button with your custom Button component */}
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Hero;
