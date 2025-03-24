import ReactPlayer from 'react-player';
import React, {useEffect, useState } from 'react';
import { poppins } from '@/public/fonts/fonts';

const Video = () => {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (optional)
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  
  return <section className={`${poppins.className} flex justify-center items-center h-auto bg-gray-100 grid md:grid-cols-2`}>
    
    {isLoading ? (
        <div className="flex justify-center items-center w-full h-60">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white border-opacity-75"></div>
        </div>
      ) : (
        <div className="relative w-[100%] max-w-4xl aspect-video overflow-hidden p-10">
        <ReactPlayer
          url={'https://www.youtube.com/watch?v=2ZcQLw1Q2ZU'}
          width='100%'
          height='100%'
          controls={true}
        />
      </div>
      )}
    <div className='space-y-6 text-black text-center md:text-left px-10 pb-10 md:pt-10'>
      <h1 className='text-4xl font-bold xl:text-7xl'>Our Reason is You</h1>
      <p className='text:base xl:text-2xl max-w-200'>Pru Life UK is an insurance provider that prioritizes customer trust and support. The company offers financial assistance and peace of mind, especially during challenging times, such as a cancer diagnosis. Customers share positive experiences with their advisers, who provide personalized guidance without pressure, helping them choose the right insurance plans for their needs. PR Life UK emphasizes that their customers are at the heart of their mission, aiming to make a meaningful difference in their lives.</p>
    </div>
  </section>;
};

export default Video;