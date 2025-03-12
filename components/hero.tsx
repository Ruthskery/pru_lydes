import React from 'react';
import { poppins } from '@/public/fonts/fonts';
import Image from 'next/image'

export function Lady() {
  return (
    <div>
      <Image
        src="/fulllydes.png"
        width={450}
        height={450}
        alt="Picture of the author"
      />
    </div>
  )
}

export function Bilog() {
  return (
    <div>
      <Image
        src="/bilog.png"
        width={750}
        height={550}
        alt="Picture of the author"
      />
    </div>
  )
}

const Hero = () => {
  return (
    <section className="w-full h-screen bg-[#f0f0f0]">
      <div className={poppins.className}>
        <div className="max-w-300 font-semibold text-left justify-center pl-50 pt-50">
          <span className="font-sans text-7xl">CHALCEDONY DIAMOND&nbsp;</span>
          <br />
          <div className="text-2xl pt-8 max-w-170 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat.
          </div>
            <button className='mt-8 p-5 px-10 text-2xl bg-yellow-500 shadow-lg shadow-yellow-500/50 rounded-full cursor-pointer'>
              Get in Touch
            </button>
        </div>
        <div className='absolute right-[480px] bottom-0 z-2'>
          <Lady />
        </div>
        
        <div className="absolute right-0 bottom-0">
          <Bilog/>
        </div>

      </div>
    </section>
  );
};

export default Hero;