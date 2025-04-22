import React from 'react';
import Image from 'next/image';
import { montserrat, roboto } from '../styles/font';


import vandm from '../public/src/vandm.jpg'; // Adjust the path as necessary


const Vandm = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center bg-[#14110F] px-4 py-20  ">
        
      <div className="relative flex gap-0 md:mt-10">
        {/* Left Card */}
        <div className="w-[50vh] h-[70vh] bg-gradient-to-bl from-[#E1B951] to-[#222] p-10 z-10 rounded-l-xl">
            <h2 className={`${montserrat.className} text-8xl font-black text-white mb-2 text-center`}>Mission</h2>
            <p className={`${roboto.className} text-3xl text-white font-light text-center justify-center`}>To empower Filipino families through personalized financial guidance that promotes stability, growth, and long-term security. Through Pru Life UK, I am dedicated to delivering exceptional service that helps clients achieve their goals with confidence.</p>
        </div>

        {/* Middle Card (Image with same styling) */}
        <div className="w-[60vh] h-[80vh] rounded-xl shadow-2xl p-2 z-20 -mt-10 overflow-hidden">
          <Image 
            src={vandm} 
            alt="Main Achievement" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>


        {/* Right Card */}
        <div className="w-[50vh] h-[70vh] bg-gradient-to-br from-[#E1B951] to-[#222] p-10 z-10 rounded-r-xl">
            <h2 className={`${montserrat.className} text-8xl font-black text-white text-center mb-2`}>Vision</h2>
            <p className={`${roboto.className} text-3xl text-white font-light justify-center text-center`}>To build a financially empowered community by being a trusted leader in financial consulting—helping individuals and families create lasting prosperity, peace of mind, and a secure future for generations.</p>
        </div>
      </div>
    </div>
  );
};

export default Vandm;