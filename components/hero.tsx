import React, { useState } from 'react';
import { poppins } from '@/public/fonts/fonts';
import ReactPlayer from 'react-player';

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="w-full h-250 md:h-236 relative grid md:grid-cols-2 bg-[#f0f0f0] flex flex-col justify-center items-start md:items-center">
      <div className={`${poppins.className} relative top-20 md:top-0 text-center md:text-left md:ml-20 2xl:ml-40 z-2`}>
        <h1 className="md:text-7xl 2xl:m-w-350 md:w-300 font-semibold text-4xl mt-7 md:max-w-md 2xl:max-w-300">CHALCEDONY <span className='text-yellow-500'>DIAMOND</span></h1>
        <p className="font-light text-lg md:text-2xl md:max-w-auto xl:m-w-350 mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className='flex justify-center md:justify-start flex-col md:flex-row z-4 md:mt-5 px-6 md:px-0'>
          <button
            onClick={() => setShowVideo(true)}
            className="mt-2 px-2 py-3 md:px-10 md:py-5 text-lg md:text-2xl rounded-full cursor-pointer 
                       shadow-lg shadow-yellow-500/50 text-yellow-500 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white">
            Watch Video
          </button>
          <button className="mt-2 px-2 py-3 md:px-10 md:py-5 text-lg md:text-2xl rounded-full cursor-pointer md:ml-4 shadow-lg shadow-yellow-500/50 text-yellow-500 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white">
            Get in Touch
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <img className='absolute h-120 md:h-170 2xl:h-200 z-2 flex bottom-0' src="/fulllydes.png" alt="" />
        <img className='opacity-25 absolute h-80 md:h-120 2xl:h-150 bottom-0 right-0' src="/bilog.png" alt="" />
      </div>

      {showVideo && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-lg bg-black bg-opacity-50 z-50">
          <div className="relative w-[90%] max-w-4xl aspect-video bg-black rounded-lg shadow-lg overflow-hidden">
            <button
              className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm md:text-base cursor-pointer"
              onClick={() => setShowVideo(false)}
            >
              Close
            </button>
            <ReactPlayer
              url={'https://www.youtube.com/watch?v=2ZcQLw1Q2ZU'}
              width='100%'
              height='100%'
              controls={true}
            />
          </div>
        </div>
      )}

    </section>
  );
};

export default Hero;
