import React from 'react';
import Image from 'next/image';
import lydes from '../public/src/lydes.png';

const About = () => {
  return (
      <div className="bg-gray-100 min-h-screen pb-12 pt-16 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[80%] mx-auto gap-10 items-center text-center md:text-left">
        
        {/* Image - Left Side */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]">
            <Image
              src={lydes}
              alt="Lydes Romero Quitong"
              className="relative z-10 w-full h-full object-contain"
            />
            <div className="absolute w-full h-full bg-[#FFD700] top-[-10px] right-[-10px] z-0"></div>
          </div>
        </div>

        {/* About Me - Middle */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-lg font-bold uppercase text-black mb-3">
            ABOUT ME
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight mb-3">
            Lydes Romero Quitong
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4 w-full">
            {/* Line Separator */}
            <span className="w-[80px] h-[4px] bg-black hidden md:inline-block rounded-sm"></span>
            
            {/* Text Content */}
            <p className="text-base md:text-lg text-black w-full md:max-w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              suscipit iste odit sunt a fugiat, ullam quos, odio minus
              nesciunt, nulla doloremque. Nobis ipsa rerum aspernatur quaerat
              molestias vero consequuntur?
            </p>
          </div>
        </div>


        {/* License & Awards - Right Side */}
        <div>
          <h1 className="text-lg font-bold uppercase text-black mb-4">
            LICENSE
          </h1>
          <ul className="list-disc pl-6 text-base md:text-lg text-black">
            <li>Certified Web Developer - 2023</li>
            <li>React.js Advanced Certification</li>
            <li>Best Software Engineer Award - 2022</li>
            <li>Top 10 Innovators - 2021</li>
          </ul>
          
          <h1 className="text-lg font-bold uppercase text-black mb-4">
           AWARDS
          </h1>
          <ul className="list-disc pl-6 text-base md:text-lg text-black">
            <li>Certified Web Developer - 2023</li>
            <li>React.js Advanced Certification</li>
            <li>Best Software Engineer Award - 2022</li>
            <li>Top 10 Innovators - 2021</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default About;
