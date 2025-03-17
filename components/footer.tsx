import React from 'react';
import { poppins } from '@/public/fonts/fonts';
import { Facebook, Instagram, Twitter, Send, Mail } from "lucide-react";

const Footer = () => {
  return <section className={`${poppins.className} h-auto bg-gray-800 text-white`}>
    <div className='grid md:grid-cols-4 gap-6 justify-center items-center'>
      <div className='flex justify-center items-center p-6'>
        <img className='w-auto lg:size-90' src="Map.png" alt="" />
      </div>
      <div className='mx-auto flex justify-center w-full items-start grid grid-cols-2 md:grid-cols-4 col-span-2 gap-4 text-center leading-loose tracking-wider p-6'>
        <div className='md:text-left space-y-4'>
          <h1 className='text-2xl md:text-3xl pb-1 md:pb-3'>Services</h1>
          <p className='text-xs md:text-base'>Service 1</p>
          <p className='text-xs md:text-base'>Service 2</p>
          <p className='text-xs md:text-base'>Service 3</p>
        </div>
        <div className='md:text-left space-y-4'>
          <h1 className='text-2xl md:text-3xl pb-1 md:pb-3'>About</h1>
          <p className='text-xs md:text-base'>About us</p>
          <p className='text-xs md:text-base'>Our Story</p>
          <p className='text-xs md:text-base'>Blog</p>
          <p className='text-xs md:text-base'>Team</p>
          <p className='text-xs md:text-base'>Careers</p>
        </div>
        <div className='md:text-left space-y-4'>
          <h1 className='text-2xl md:text-3xl pb-1 md:pb-3'>Legal</h1>
          <p className='text-xs md:text-base'>Terms & Condition</p>
          <p className='text-xs md:text-base'>Privacy Policy</p>
          <p className='text-xs md:text-base'>Terms of Use</p>
        </div>
        <div className='md:text-left space-y-4'>
          <h1 className='text-2xl md:text-3xl pb-1 md:pb-3'>Address</h1>
          <p className='text-xs md:text-base'>123 Main St</p>
          <p className='text-xs md:text-base'>Springfield, IL 62701</p>
        </div>
      </div>
      <div className='flex justify-between items-center p-6 grid grid-cols-2 grid-rows-2'>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div>
          <img className='' src="src/bcdq.png" alt="" />
        </div>
        <div className='col-span-2 grid-rows-2'>
          <div className='mb-10 text-2xl font-bold'>
            Socials:
          </div>
          <div className='flex flex-row space-x-6 justify-between mr-10'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
              <Facebook className="w-10 h-10" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
              <Instagram className="w-10 h-10" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
              <Twitter className="w-10 h-10" />
            </a>
            <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
              <Send className="w-10 h-10" />
            </a>
            <a href="mailto:example@gmail.com" className="text-white hover:text-yellow-400">
              <Mail className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className='h-10 flex justify-center items-center text-xs font-thin bg-gray-900'>
            Terms & Conditions | Privacy Policy | 2025 © Branch Name
    </div>
  </section>
};

export default Footer;
