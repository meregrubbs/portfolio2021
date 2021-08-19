import * as React from 'react';
import SEO from '../templates/SEO';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import '../css/index.css';

const NotFoundPage = () => {
  return (
    <main>
      <SEO />
      <Header />
      <h1 className='section-title'>Page Not Found</h1>
      <p>Sorry, we couldn't find the page you were looking for.</p>
      <Footer />
    </main>
  );
};

export default NotFoundPage;
