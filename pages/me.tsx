import React from 'react'
import Navbar from '@/about/navbar';
import Hero from '@/about/hero';
import Headshot from '@/about/headshot';
// import Vandm from '@/about/vandm';

const Me = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Headshot />
        {/* <Vandm /> */}
    </div>
  );
};

export default Me;