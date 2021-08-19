import * as React from 'react';
import Seo from '../templates/Seo';
import Hero from '../templates/Hero';
import Portfolio from '../templates/Portfolio';
import Testimonials from '../templates/ClientTestimonials';
import Footer from '../templates/Footer';
import '../css/index.css';

const IndexPage = () => {
  return (
    <main>
      <Seo />
      <Hero />
      <Portfolio />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default IndexPage;
