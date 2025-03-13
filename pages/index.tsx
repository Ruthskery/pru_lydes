import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Carousel from '@/components/carousel';
import React from 'react';

const Home = () => {
  return <div>
    <Navbar />
    <Hero />
    <Carousel />
    <About />
    <Contact />
    <Footer />
  </div>;
};

export default Home;