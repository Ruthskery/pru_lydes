import React from 'react';
import Image from 'next/image';
// import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import lydes from '../public/src/lydes.png';

const About = () => {
  return  <div className="bg-gray-100 pb-[3rem] pt-[4rem] md:pt-[8rem]">
  <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
    <div>
      <h1 className="text-[20px] font-bold uppercase text-black mb-[1rem]">
        ABOUT ME
      </h1>
      <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] capitalize mb-[3rem] font-bold text-black">
      Lydes Romero Quitong
      </h2>
      <div className="mb-[3rem] flex items-center md:space-x-10">
        <span className="w-[100px] hidden md:block h-[5px] bg-black-400 rounded-sm"></span>
        <p className="text-[19px] text-black w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          suscipit iste odit sunt a fugiat, ullam quos, odio minus
          nesciunt, nulla doloremque. Nobis ipsa rerum aspernatur quaerat
          molestias vero consequuntur? 
        </p>
      </div>
      {/* <button
        className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[10px] 
                    font-bold uppercase bg-[#FFD700] text-black flex items-center space-x-2"
      >
        <p>Download CV</p>
        <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
      </button> */}
    </div>
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0">
      <Image
        src={lydes}
        alt="Lydes Romero Quitong"
        width={500}
        height={500}
        className="relative z-[11] w-full h-full object-contain"
      />
      <div className="absolute w-full h-full bg-[#FFD700] top-[-1rem] right-[-1rem] z-[10]"></div>
    </div>
  </div>
</div>
};

export default About;