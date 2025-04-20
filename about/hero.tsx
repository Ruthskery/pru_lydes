import React from 'react';
import Image from 'next/image';

import lydes from '../public/src/aboutme.jpg';

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center bg-[#14110F] p-6 md:p-12'>
      
      {/* Title and Line Break */}
      <div className='flex flex-col items-center justify-center mt-20 mb-10'>
        <h1 className="text-8xl font-black bg-gradient-to-r from-[#E1B951] to-[#96700f] bg-clip-text text-transparent">
          About Me
        </h1>
      </div>

      {/* Line break after title */}
        <hr className="my-2 border-t-2 border-white w-3/4" /> 

      {/* Image and Content in 2 columns */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-15 mb-15'>
        {/* Image Column */}
        <div className='flex justify-center items-center'>
          <Image 
            src={lydes}
            alt="Lydes" 
            className='object-contain rounded-lg' 
            width={500} 
            height={500} 
          />
        </div>

        {/* Content Column */}
        <div className='flex flex-col justify-center items-start space-y-4'>
          <p className="font-extrabold text-white text-5xl sm:text-6xl text-center md:text-7xl">
            My Story
          </p>
          <p className="font-extralight text-white text-justify text-lg sm:text-xl md:text-3xl">
            I am a 22-year-old graduate of Bachelor of Science in Information Technology from the University of the Cordilleras. I am a passionate and dedicated individual with a strong desire to learn and grow in the field of technology. I have a keen interest in web development, programming, and software engineering. I am always eager to take on new challenges and expand my skill set. I believe that continuous learning is essential in this ever-evolving industry, and I am committed to staying up-to-date with the latest trends and technologies.
          </p>
        </div>
      </div>

         {/*Bottom Line Break */}
          <hr className="my-2 border-t-2 border-white w-3/4" /> 

    </section>
  );
};

export default Hero;
