import * as React from 'react';
import { Link } from 'react-router-dom';
import alicePortfolio from '../../images/portfolio-images/portfolio-alice.png';
import maressaPortfolio from '../../images/portfolio-images/portfolio-maressa.png';
import arrowBlack from '../../images/icon-downarrow-black.png';

// data
const sampleWork = [
  {
    label: 'Case Study',
    title: 'Alice Dubin Media',
    description: 'An online portfolio showcasing professional journalism work',
    tags: 'UI/UX design • Front-end development • Custom Wordpress theme',
    img: alicePortfolio,
    linkTo: 'portfolio-alice'
  },
  {
    label: 'Case Study',
    title: 'Maressa Brown',
    description:
      'A professional portfolio for a freelance journalist, editor, author and astrologer',
    tags: 'UI/UX design • Front-end development • Custom Wordpress theme',
    img: maressaPortfolio,
    linkTo: 'portfolio-maressa'
  }
];

// markup
const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h1 className='section-title'>Portfolio</h1>
      {sampleWork.map(sample => (
        <div className='portfolio-item' key={sample.title}>
          <Link to={sample.linkTo}>
            <div className='portfolio-text'>
              <p className='label'>{sample.label}:</p>
              <h2 className='title'>{sample.title}</h2>
              <p className='description'>{sample.description}</p>
              <p className='tags'>{sample.tags}</p>
            </div>
          </Link>

          <div className='portfolio-img'>
            <img src={sample.img} alt='' />
          </div>
          <div className='case-study-link'>
            <span>View case study</span>
            <div className='case-study-arrow'>
              <img src={arrowBlack} alt='' />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
