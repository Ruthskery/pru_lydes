
import React from 'react';
import { poppins } from '@/public/fonts/fonts';

const Footer = () => {
  return <section className={`${poppins.className} h-auto bg-gray-800 text-white`}>
    <div className='h-10 flex justify-center items-center text-xs font-thin bg-gray-900'>
            Terms & Conditions | Privacy Policy | 2025 © Branch Name
    </div>
  </section>
};

export default Footer;
