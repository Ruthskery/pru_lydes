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
  
  return <section className={`${poppins.className} flex justify-center items-center h-auto bg-yellow-500 grid md:grid-cols-2`}>
    
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
    <div className='space-y-6 text-gray-300 text-center md:text-left px-10 pb-10 md:pt-10'>
      <h1 className='text-4xl font-bold xl:text-7xl'>Video Kuno Sabi Nira</h1>
      <p className='text:base xl:text-2xl max-w-200'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Architecto omnis modi nostrum reprehenderit saepe neque eos, 
         qui veritatis molestias pariatur hic autem velit placeat 
         adipisci accusamus mollitia. Veritatis, ea voluptatem?</p>
    </div>
  </section>;
};

export default Video;