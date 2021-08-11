import * as React from 'react';
import { Link } from 'react-router-dom';
import aliceImage from '../../images/testimonial-images/alice.png';
import maressaImage from '../../images/testimonial-images/maressa.png';
import emmieImage from '../../images/testimonial-images/emmie.png';

// data
const testimonials = [
  {
    name: 'Alice Dubin',
    title: 'Journalist & Content Marketing Writer',
    text:
      '[Meredith’s] work is just top quality... I feel that my website represents exactly what I hoped to achieve... I am really thrilled with the result (and so relieved I didn’t try to do this myself without her expertise).',
    img: aliceImage
  },
  {
    name: 'Maressa Brown',
    title: 'Journalist & Content Strategist',
    text:
      'Meredith Grubbs is an intuitive, creative, and communicative designer who is perpetually taking her skills to the next level... [She] worked diligently to ensure that my site fully represented my brand.',
    img: maressaImage
  },
  {
    name: 'Emaline Brown',
    title: 'Naturopathic Physician',
    text:
      'It was a pleasure working with Meredith in designing my first website! She is patient and detail-oriented... She even took the time to meet and show me the basics on Wordpress... So grateful for my beautiful site, I would choose her again in an instant!',
    img: emmieImage
  }
];

// markup
const Testimonials = () => {
  return (
    <section className='testimonials'>
      <h1 className='section-title'>Testimonials</h1>
      {testimonials.map(testimonial => (
        <div className='single-testimonial' key={testimonial.name}>
          <div className='testimonial-img'>
            <img src={testimonial.img} alt={testimonial.name} />
          </div>

          <div className='testimonial-text'>
            <p className='text'>{testimonial.text}</p>
            <p className='name'>{testimonial.name}</p>
            <p className='title'>{testimonial.title}</p>
          </div>
        </div>
      ))}
      <Link className='button hero-button' to='/contact'>
        Let's Work Together
      </Link>
    </section>
  );
};

export default Testimonials;
