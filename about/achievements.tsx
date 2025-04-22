'use client';

import React from 'react';
import Image from 'next/image';
import { montserrat } from '../styles/font';

import awardImage from '../public/src/plaque.png'; // Use correct image

const Achievements = () => {
  return (
    <div className="w-full bg-[#14110F] py-16 overflow-hidden">
      <h2 className={`${montserrat.className} text-white text-5xl font-bold mb-15 ml-20 text-left`}>
        Milestones & Achievements
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap gap-30">
          {/* Repeat elements for smooth loop */}
          {[...Array(2)].map((_, index) => (
            <React.Fragment key={index}>
              <Image src={awardImage} alt="Award" width={200} height={200} className="inline-block" />
              <Image src={awardImage} alt="Award" width={200} height={200} className="inline-block" />
              <Image src={awardImage} alt="Award" width={200} height={200} className="inline-block" />
              <Image src={awardImage} alt="Magazine" width={200} height={280} className="inline-block" />
              <Image src={awardImage} alt="Magazine" width={200} height={280} className="inline-block" />
              <Image src={awardImage} alt="Award" width={200} height={200} className="inline-block" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
