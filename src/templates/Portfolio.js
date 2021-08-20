import * as React from 'react';
import { Link } from 'gatsby';
import alicePortfolio from '../images/portfolio-images/portfolio-alice.png';
import alicePortfolioSmall from '../images/portfolio-images/portfolio-alice-small.png';
import maressaPortfolio from '../images/portfolio-images/portfolio-maressa.png';
import maressaPortfolioSmall from '../images/portfolio-images/portfolio-maressa-small.png';
import arrowBlack from '../images/icon-downarrow-black.svg';

// markup
const Portfolio = () => {
  // data
  const sampleWork = [
    {
      label: 'Case Study',
      title: 'Alice Dubin Media',
      description:
        'An online portfolio showcasing professional journalism work',
      tags: 'UI/UX design • Front-end development • Custom Wordpress theme',
      img: alicePortfolio,
      imgSrcSet: `${alicePortfolioSmall} 800w, ${alicePortfolio} 1200w`,
      linkTo: '/portfolio/alice'
    },
    {
      label: 'Case Study',
      title: 'Maressa Brown',
      description:
        'A professional portfolio for a freelance journalist, editor, author and astrologer',
      tags: 'UI/UX design • Front-end development • Custom Wordpress theme',
      img: maressaPortfolio,
      imgSrcSet: `${maressaPortfolioSmall} 800w, ${maressaPortfolio} 1200w`,
      linkTo: '/portfolio/maressa'
    }
  ];

  return (
    <section className='portfolio'>
      <h1 className='section-title'>Portfolio</h1>
      {sampleWork.map(sample => (
        <div className='portfolio-item' key={sample.title}>
          <Link to={sample.linkTo} className='portfolio-text'>
            <p className='label'>{sample.label}:</p>
            <h2 className='title'>{sample.title}</h2>
            <p className='description'>{sample.description}</p>
            <p className='tags'>{sample.tags}</p>
          </Link>

          <div className='portfolio-img'>
            <img
              srcset={sample.imgSrcSet}
              src={sample.img}
              alt={'image of design work for ' + sample.title}
            />
          </div>

          <Link to={sample.linkTo}>
            <div className='case-study-link'>
              <span>View case study for {sample.title}</span>
              <div className='case-study-arrow'>
                <img
                  src={arrowBlack}
                  alt='click to view case study for '
                  {...sample.title}
                />
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
