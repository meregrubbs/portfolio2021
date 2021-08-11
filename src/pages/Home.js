import * as React from 'react';
import Hero from './home_components/Hero';
import Portfolio from './home_components/Portfolio';
import Testimonial from './home_components/Testimonial';
import Footer from './header_footer/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
