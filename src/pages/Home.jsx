// src/pages/Home.jsx - THE ROYAL HOMEPAGE OF LPI FOOD
import React from 'react';
import HeroBanner from '../components/HeroBanner';
import ServicesAndMenu from '../components/Menu';
import Events from '../components/Events';
import Chefs from '../components/Chefs';
import Gallery from '../components/Gallery';
import WhyChooseUs from '../components/Why';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      {/* 1. The Royal Arrival */}
      <HeroBanner />

      {/* 2. A Taste of Royalty – Menu Preview */}
      <ServicesAndMenu />

      {/* 3. Celebrate Like Royalty – Events & Celebrations */}
      <Events />

      {/* 4. Meet the Culinary Maharajas */}
      <Chefs />

      {/* 5. A Visual Palace – Gallery */}
      <Gallery />

      {/* 6. Why Kings & Queens Choose LPI */}
      <WhyChooseUs />

      {/* 7. Whispers from the Royal Court – Guest Testimonials */}
      <Testimonials />
    </>
  );
};

export default Home;