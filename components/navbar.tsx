'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { montserrat } from '../styles/font';
import { motion, AnimatePresence } from 'framer-motion';
import bcdq from '../public/src/bcdq.png';

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
            backgroundColor: scrolled ? '#E1B951' : 'transparent',
            boxShadow: scrolled ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
            transition: 'background-color 0.3s ease-in-out, width 0.3s ease-in-out',
          }}
        >
          {/* Logo */}
          <div className="flex items-center">
            <a href="#main">
              <Image
                src={bcdq}
                alt="Blue Chalcedony"
                width={90}
                height={90}
                className="object-contain"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-15">
            <ul
              className={`${montserrat.className} flex space-x-15 text-base md:text-lg lg:text-2xl font-bold`}
            >
              {['Service', 'Products', 'Contact', 'About'].map((item, index) => {
                const linkHref = {
                  Service: '#service',
                  Products: '#products',
                  Contact: '#contact',
                  About: '#about',
                }[item] || '#';

                return (
                  <li
                    key={index}
                    className="relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-full after:h-[2px] after:bg-black after:transform after:-translate-x-1/2 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    <a href={linkHref}>{item}</a>
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


// import React, { useState, useEffect } from 'react';
// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel
// } from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import bcdq from '../public/src/bcdq.png';
// import { poppins } from '@/public/fonts/fonts';

// const navigation = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '#about' },
//   { name: 'Services', href: '#credentials' },
//   { name: 'Contact', href: '#contact' },
// ];

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ');
// }

// const Navbar = () => {
//   const [scrolling, setScrolling] = useState(false);
//   const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
//   const [lastScrollTop, setLastScrollTop] = useState(0);
//   const router = useRouter();

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;

//       setScrolling(scrollTop > 50);
//       if (scrollTop > lastScrollTop) {
//         setScrollDirection('down');
//       } else {
//         setScrollDirection('up');
//       }

//       setLastScrollTop(scrollTop);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollTop]);

//   const isActive = (href: string) =>
//     router.asPath === href || (router.asPath.includes(href) && href !== '/');

//   return (
//     <Disclosure
//       as="nav"
//       className={classNames(
//         scrolling ? 'bg-transparent shadow-lg backdrop-blur-lg' : 'bg-transparent',
//         scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0',
//         'fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out py-3'
//       )}
//     >
//       <div className="mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon className="block size-6 group-data-open:hidden" aria-hidden="true" />
//               <XMarkIcon className="hidden size-6 group-data-open:block" aria-hidden="true" />
//             </DisclosureButton>
//           </div>

//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex shrink-0 items-center lg:ml-50">
//               <Image src={bcdq} alt="Blue Chalcedony" width={100} height={100} />
//             </div>

//             <div className="hidden sm:flex sm:items-center sm:ml-auto">
//               <div className="flex space-x-4">
//                 {navigation.map((item) => (
//                   <Link key={item.name} href={item.href} passHref>
//                     <span
//                       aria-current={isActive(item.href) ? 'page' : undefined}
//                       className={classNames(
//                         poppins.className,
//                         'rounded-md px-3 py-2 text-xl font-medium transition-all duration-500',
//                         isActive(item.href)
//                           ? 'bg-[#FFD700] text-black font-bold'
//                           : 'text-black hover:bg-[#FFD700] hover:text-black font-bold'
//                       )}
//                     >
//                       {item.name}
//                     </span>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pt-2 pb-3">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={isActive(item.href) ? 'page' : undefined}
//               className={classNames(
//                 'block rounded-md px-3 py-2 text-base font-medium transition-all duration-1000',
//                 isActive(item.href)
//                   ? 'bg-[#FFD700] text-black font-bold'
//                   : 'text-black hover:bg-white hover:text-black'
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   );
// };

// export default Navbar;
