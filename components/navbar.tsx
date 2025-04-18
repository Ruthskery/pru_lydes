import React, { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link'; // Import Link component
import { useRouter } from 'next/router'; // Import useRouter
import bcdq from '../public/src/bcdq.png';
import { poppins } from '@/public/fonts/fonts';

// Define navigation with actual routes
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#credentials' },
  { name: 'Contact', href: '#contact' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const router = useRouter(); // Get the current route using useRouter

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={classNames(
        scrolling ? 'bg-transparent shadow-lg backdrop-blur-lg' : 'bg-transparent',
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-3'
      )}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          {/* Logo + Navigation */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center lg:ml-50">
              <Image src={bcdq} alt="Blue Chalcedony" width={100} height={100} />
            </div>
            <div className="hidden sm:flex sm:items-center sm:ml-auto">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} passHref>
                    <span
                      aria-current={
                        router.asPath === item.href || (router.asPath.includes(item.href) && item.href !== '/') ? 'page' : undefined
                      }
                      className={classNames(
                        poppins.className,
                        'rounded-md px-3 py-2 text-xl font-medium transition-all duration-[500ms]', // 1 second transition
                        router.asPath === item.href || (router.asPath.includes(item.href) && item.href !== '/')
                          ? 'bg-[#FFD700] text-black font-bold' // Active state (background color changes)
                          : scrolling
                          ? 'text-black hover:bg-[#FFD700] hover:text-black font-bold' // White BG on hover when navbar is yellow
                          : 'text-black hover:bg-[#FFD700] hover:text-black font-bold' // Default hover
                      )}
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={
                router.asPath === item.href || (router.asPath.includes(item.href) && item.href !== '/') ? 'page' : undefined
              }
              className={classNames(
                'block rounded-md px-3 py-2 text-base font-medium transition-all duration-[1000ms]', // 1 second transition
                router.asPath === item.href || (router.asPath.includes(item.href) && item.href !== '/')
                  ? 'bg-[#FFD700] text-black font-bold' // Active state (background color changes)
                  : scrolling
                  ? 'text-black hover:bg-white hover:text-black' // White BG on hover in mobile when navbar is yellow
                  : 'text-black hover:bg-[#FFFFFF] hover:text-black' // Default hover
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
