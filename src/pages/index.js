import * as React from 'react';
import Hero from '../templates/Hero';
import Portfolio from '../templates/Portfolio';
import Testimonials from '../templates/ClientTestimonials';
import Footer from '../templates/Footer';
import '../css/index.css';

const IndexPage = () => {
  return (
    <main>
      <title>Meredith Grubbs | Web Designer and Developer</title>
      <Hero />
      <Portfolio />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default IndexPage;
