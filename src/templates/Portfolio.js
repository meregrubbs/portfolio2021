import * as React from 'react';
import { Link } from 'gatsby';
import alicePortfolio from '../images/portfolio-images/portfolio-alice.png';
import alicePortfolioSmall from '../images/portfolio-images/portfolio-alice-small.png';
import aliceSubstack from '../images/portfolio-images/alice-substack.png';
import aliceSubstackSmall from '../images/portfolio-images/alice-substack-small.png';
import fmFlyer from '../images/portfolio-images/fm-flyer-front.png';
import fmFlyerSmall from '../images/portfolio-images/fm-flyer-front-small.png';
import maressaPortfolio from '../images/portfolio-images/portfolio-maressa.png';
import maressaPortfolioSmall from '../images/portfolio-images/portfolio-maressa-small.png';
import arrowBlack from '../images/icon-downarrow-black.svg';

// markup
const Portfolio = () => {
  // data
  const sampleWork = [
    {
      label: 'Responsive Website',
      title: 'Alice Dubin Media',
      description:
        'An online portfolio showcasing professional journalism work',
      tags: 'UI/UX design • Front-end development • Custom Wordpress theme',
      img: alicePortfolio,
      imgSrcSet: `${alicePortfolioSmall} 800w, ${alicePortfolio} 1200w`,
      linkTo: '/portfolio/alice'
    },
    {
      label: 'Visual Design',
      title: 'Substack Graphic Design',
      description:
        'Visual design for a client using Substack, an online newsletter subscription website',
      tags: 'UI design • Graphic design',
      img: aliceSubstack,
      imgSrcSet: `${aliceSubstackSmall} 800w, ${aliceSubstack} 1200w`,
      linkTo: '/portfolio/alice-substack'
    },
    {
      label: 'Visual Design',
      title: 'Frost Methane Flyer',
      description:
        'Flyer design for Frost Methane — used as an informational visual at a conference to introduce the company',
      tags: 'UI design • Graphic design',
      img: fmFlyer,
      imgSrcSet: `${fmFlyerSmall} 800w, ${fmFlyer} 1200w`,
      linkTo: '/portfolio/frost-methane'
    },
    {
      label: 'Responsive Website',
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
      <h1 className='section-title'>Design Work</h1>
      {sampleWork.map(sample => (
        <div className='portfolio-item'>
          <Link
            to={sample.linkTo}
            key={sample.title}
            className='portfolio-item-link'
          >
            <div className='portfolio-text'>
              <p className='label'>{sample.label}:</p>
              <h2 className='title'>{sample.title}</h2>
              <p className='description'>{sample.description}</p>
              <p className='tags'>{sample.tags}</p>
            </div>

            <div className='portfolio-img'>
              <img
                srcset={sample.imgSrcSet}
                src={sample.img}
                alt={'image of design work for ' + sample.title}
                loading='lazy'
              />
            </div>
          </Link>

          <Link to={sample.linkTo} className='case-study-link'>
            <span>View case study</span>
            <div className='case-study-arrow'>
              <img
                src={arrowBlack}
                alt={'click to view case study for ' + sample.title}
                loading='lazy'
              />
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
