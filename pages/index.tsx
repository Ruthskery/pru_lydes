import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Carousel from '@/components/carousel';
import Credentials from '@/components/credentials';
// import Careerpath from '@/components/careerpath';
import React from 'react';
import Video from '@/components/video';
// import Appointment from '@/components/appointment';
import Faqs from '@/components/faqs';
import TestimonialsCarousel from '@/components/testimonies';

// import Test from '@/components/test';


const Home = () => {
  return <div>

    {/* Recently Added */}
    <Navbar />

    <section id='main'>
    <Hero />
    </section>

    <Video />
    <Carousel />
    {/* for testing the backgroundColor
    <Test/> */}

    <section id='service'>
      <Credentials />
    </section>

    {/* ------------------------------ */}
    {/* <Careerpath /> */}
  
    {/* <Appointment /> */}
    <TestimonialsCarousel />
    <Faqs />
    <section id='contact'> 
    <Contact />
    </section>

        <h1>Check My Availability</h1>
        {/* Embed Calendly iframe */}
        <div>
          <iframe 
            src="https://calendly.com/mikotothemax/30min" 
            width="100%" 
            height="800" 
            frameBorder="0"
          ></iframe>
        </div>
    <Footer />   
  </div>;
};

export default Home;
