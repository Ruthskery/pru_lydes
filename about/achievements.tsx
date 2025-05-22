'use client';

import React from 'react';
import Image from 'next/image';
import { montserrat } from '../styles/font';

import awardImage from '../public/src/plaque.png';

const Achievements = () => {
  return (
    <div className="w-full bg-[#14110F] dark:bg-[#FCF8EE] py-6 sm:py-8 md:py-12 lg:py-16 overflow-hidden">
      {/* Section Title */}
      <h2
        className={`
          ${montserrat.className} 
          text-white dark:text-[#14110F] 
          text-2xl sm:text-4xl md:text-5xl 
          font-bold 
          mb-6 sm:mb-10 md:mb-12 
          ml-4 sm:ml-10 md:ml-20 
          text-left
        `}
      >
        Milestones & Achievements
      </h2>

      {/* Scrolling Awards Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap gap-4 sm:gap-6 md:gap-10 lg:gap-14 xl:gap-20 px-4 sm:px-10">
          {[...Array(2)].map((_, index) => (
            <React.Fragment key={index}>
              {/* Repeating Items */}
              <Image
                src={awardImage}
                alt="Award"
                width={220}
                height={220}
                className="inline-block w-[100px] sm:w-[140px] md:w-[180px] lg:w-[200px] xl:w-[220px] h-auto"
              />
              <Image
                src={awardImage}
                alt="Award"
                width={220}
                height={220}
                className="inline-block w-[100px] sm:w-[140px] md:w-[180px] lg:w-[200px] xl:w-[220px] h-auto"
              />
              <Image
                src={awardImage}
                alt="Award"
                width={220}
                height={220}
                className="inline-block w-[100px] sm:w-[140px] md:w-[180px] lg:w-[200px] xl:w-[220px] h-auto"
              />
              <Image
                src={awardImage}
                alt="Magazine"
                width={220}
                height={280}
                className="inline-block w-[100px] sm:w-[140px] md:w-[180px] lg:w-[200px] xl:w-[220px] h-auto"
              />
              <Image
                src={awardImage}
                alt="Magazine"
                width={220}
                height={280}
                className="inline-block w-[100px] sm:w-[140px] md:w-[180px] lg:w-[200px] xl:w-[220px] h-auto"
              />
              <Image
                src={awardImage}
                alt="Award"
                width={220}
                height={220}
                className="inline-block w-[100px] sm:w-[140px] md:w-[180px] lg:w-[200px] xl:w-[220px] h-auto"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
