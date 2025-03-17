import React from 'react';
import { poppins } from '@/public/fonts/fonts';

const Footer = () => {
  return <section className={`${poppins.className} h-auto bg-gray-800 text-white`}>
    <div className='grid md:grid-cols-2 gap-6 justify-center items-center'>
      <div className='flex justify-center items-center p-6'>
        <img className='w-auto lg:size-90' src="Map.png" alt="" />
      </div>
      <div className='mx-auto flex justify-center w-full items-center grid grid-cols-2 grid-rows-2 gap-4 text-center leading-loose tracking-wider p-6'>
        <div className='md:text-left'>
          <h1 className='text-2xl md:text-4xl pb-1 md:pb-3'>Address</h1>
          <p className='text-xs'>123 Main St</p>
          <p>Springfield, IL 62701</p>
        </div>
        <div className='md:text-left'>
          <h1 className='text-2xl md:text-4xl pb-1 md:pb-3'>Address</h1>
          <p className='text-xs'>123 Main St</p>
          <p>Springfield, IL 62701</p>
        </div>
        <div className='md:text-left'>
          <h1 className='text-2xl md:text-4xl pb-1 md:pb-3'>Address</h1>
          <p className='text-xs'>123 Main St</p>
          <p>Springfield, IL 62701</p>
        </div>
        <div className='md:text-left'>
          <h1 className='text-2xl md:text-4xl pb-1 md:pb-3'>Address</h1>
          <p className='text-xs'>123 Main St</p>
          <p>Springfield, IL 62701</p>
        </div>
      </div>
    </div>
    <div className='h-10 flex justify-center items-center text-xs font-thin'>
            Terms & Conditions | Privacy Policy | © Branch Name
    </div>
  </section>
};

export default Footer;
