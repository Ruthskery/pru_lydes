
import React from 'react';
import { poppins } from '@/public/fonts/fonts';

const Footer = () => {
  return <section className={`${poppins.className} h-110 bg-gray-800 text-white`}>
    <div className='grid grid-cols-2 gap-6 justify-center items-center'>
      <div className='flex h-100 justify-center items-center w-224'>
      </div>
      <div className='h-100 mx-auto flex justify-center w-full items-center grid grid-cols-2 grid-rows-2 gap-4 text-center leading-loose tracking-wider'>
        <div className='text-left'>
          <h1 className='text-4xl pb-3'>Address</h1>
          <p>123 Main St</p>
          <p>Springfield, IL 62701</p>
        </div>
        <div className='text-left pb-3'>
          <h1 className='text-4xl'>Address</h1>
          <p>123 Main St</p>
          <p>Springfield, IL 62701</p>
        </div>
        <div className='text-left pb-3'>
          <h1 className='text-4xl'>Address</h1>
          <p>123 Main St</p>
          <p>Springfield, IL 62701</p>
        </div>
        <div className='text-left pb-3'>
          <h1 className='text-4xl'>Address</h1>
          <p>123 Main St</p>
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
