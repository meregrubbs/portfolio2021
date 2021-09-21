import * as React from 'react';
import { Link } from 'gatsby';
import Header from '../templates/Header';
import Footer from '../templates/Footer';

// markup
const PortfolioTemplate = props => {
  const data = props.data;
  const casestudy = props.casestudy;

  return (
    <>
      <Header />

      <div className='portfolio-page-intro'>
        <div className='portfolio-page-intro-text'>
          <h1>{data.title}</h1>
          <p className='subtitle'>{data.subtitle}</p>
          <h3>Services</h3>
          {data.services.map(service => (
            <p className='service' key={service}>
              {service}
            </p>
          ))}
          <a
            className='website'
            href={data.websiteURL}
            target='_blank'
            rel='noreferrer '
          >
            {data.websiteName}
          </a>
        </div>
        <div className='portfolio-img'>
          <img
            srcSet={data.imgSrcSet}
            src={data.img}
            alt={'image of design work for ' + data.title}
          />
        </div>
      </div>

      <div className='case-study'>
        {casestudy.map(study => (
          <div className='casestudy-section' key={study.heading}>
            <h2>{study.heading}</h2>
            {study.paragraphs.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {study.images.map(image => (
              <div className='image-group' key={image.pic}>
                <h3 className='caption'>{image.caption}</h3>
                <div className='casestudy-image'>
                  <img
                    srcSet={image.srcset}
                    src={image.pic}
                    alt={image.caption}
                    loading='lazy'
                  />
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
