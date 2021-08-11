import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header_footer/Header';
import Footer from '../header_footer/Footer';

// markup
const PortfolioTemplate = props => {
  const data = props.data;
  const casestudy = props.casestudy;

  return (
    <>
      <Header />

      <div className='portfolio-page-intro'>
        <div className='portfolio-page-intro-text'>
          <h1>{props.data.title}</h1>
          <p className='subtitle'>{data.subtitle}</p>
          <h3>Services</h3>
          {data.services.map(service => (
            <p className='service'>{service}</p>
          ))}
          <a
            className='website'
            href={data.website}
            target='_blank'
            rel='noreferrer '
          >
            {data.website}
          </a>
        </div>
        <div className='portfolio-page-intro-img'>
          <img src={data.img} alt='' />
        </div>
      </div>

      <div className='case-study'>
        {casestudy.map(study => (
          <div className='casestudy-section'>
            <h2>{study.heading}</h2>
            {study.paragraphs.map(paragraph => (
              <p>{paragraph}</p>
            ))}
            {study.images.map(image => (
              <div className='image-group'>
                <h3 className='caption'>{image.caption}</h3>
                <div className='casestudy-image'>
                  <img src={image.pic} alt={image.caption} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <Link className='button button-end' to='/contact'>
        Let's Work Together
      </Link>

      <Footer />
    </>
  );
};

export default PortfolioTemplate;
