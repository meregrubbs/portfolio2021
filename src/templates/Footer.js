import * as React from 'react';

// markup
const Footer = () => {
  return (
    <section className='footer'>
      <p>Meredith Grubbs Design — 2021</p>
      <div className='footer-links'>
        <a
          href='https://www.linkedin.com/in/meredithgrubbs/'
          target='_blank'
          rel='noreferrer'
        >
          LinkedIn
        </a>
        <span> • </span>
        <a
          href='https://github.com/meregrubbs'
          target='_blank'
          rel='noreferrer'
        >
          GitHub
        </a>
        <span> • </span>
        <a
          href='https://twitter.com/MeredithGrubbs'
          target='_blank'
          rel='noreferrer'
        >
          Twitter
        </a>
      </div>
    </section>
  );
};

export default Footer;
