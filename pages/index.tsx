import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
// import Carousel from '@/components/carousel';
import Credentials from '@/components/credentials';
import Careerpath from '@/components/careerpath';
import React from 'react';
// import InflationCalculator from '@/components/inflationcalcu';
import Video from '@/components/video';


const Home = () => {
  return <div>
    <Navbar />
    <Hero />
    <Video />
    {/* <Carousel /> */}
    <About />
    <Credentials />
    <Careerpath />
    {/* <InflationCalculator /> */}
    <Contact />
    <Footer />
  </div>;
};

export default Home;