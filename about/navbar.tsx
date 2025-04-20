'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { montserrat } from '../styles/font';
import { motion, AnimatePresence } from 'framer-motion';
import bcdq from '../public/src/bcdq.png';
import Link from 'next/link';


const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && Math.abs(currentScrollY - lastScrollY) > 10) {
        setScrollDirection(direction);
      }
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      setScrolled(currentScrollY > 10); // Update scroll state
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, [scrollDirection]);

  return (
    <AnimatePresence>
      {scrollDirection === 'up' && (
       <motion.nav
       key="navbar"
       initial={{ y: -100, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       exit={{ y: -100, opacity: 0 }}
       transition={{ duration: 0.4, ease: 'easeInOut' }}
       className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-40 px-6 lg:px-[12.5rem] py-4 flex items-center justify-between shadow-md transition-all duration-300 ease-in-out
         ${scrolled ? 'lg:rounded-bl-[2.5rem] lg:rounded-br-[2.5rem] w-[95%]' : 'w-full'}`}
       style={{
         backgroundColor: '#E1B951', // ✅ Always set background to gold
         boxShadow: scrolled ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
         transition: 'background-color 0.3s ease-in-out, width 0.3s ease-in-out',
       }}
     >     
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={bcdq}
                alt="Blue Chalcedony"
                width={90}
                height={90}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-15">
            <ul
              className={`${montserrat.className} flex space-x-15 text-base md:text-lg lg:text-2xl font-bold`}
            >
              {['Service', 'Products', 'Contact', 'About'].map((item, index) => {
                const linkHref = {
                  Service: '/',
                  Products: '/',
                  Contact: '/',
                  About: '/me',
                }[item] || '#';

                return (
                  <li
                    key={index}
                    className="relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-full after:h-[2px] after:bg-black after:transform after:-translate-x-1/2 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                  {/* ✅ Use Link instead of <a> */}
                  <Link href={linkHref}>
                    {item}
                  </Link>
                  </li>
                );
              })}
            </ul>

            <button
              className={`${montserrat.className} bg-[#14110F] text-white text-sm md:text-base lg:text-xl font-semibold rounded-full px-5 md:px-6 py-2 shadow hover:scale-110 transition-transform`}
            >
              Schedule an Appointment
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
              {menuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-[#E1B951] flex flex-col items-center space-y-4 py-6 lg:hidden rounded-b-[2.5rem] shadow-md z-50">
              <ul
                className={`${montserrat.className} flex flex-col items-center space-y-4 text-lg font-bold`}
              >
                <a href="#service">
                  <li className="hover:underline underline-offset-4 cursor-pointer">Service</li>
                </a>
                <a href="#products">
                  <li className="hover:underline underline-offset-4 cursor-pointer">Products</li>
                </a>
                <a href="#contact">
                  <li className="hover:underline underline-offset-4 cursor-pointer">Contact</li>
                </a>
                <a href="#about">
                  <li className="hover:underline underline-offset-4 cursor-pointer">About</li>
                </a>
              </ul>

              <button
                className={`${montserrat.className} bg-[#14110F] text-white text-base font-semibold rounded-full px-6 py-2 shadow hover:scale-110 transition-transform`}
              >
                Schedule an Appointment
              </button>
            </div>
          )}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;