import * as React from 'react';
import PortfolioTemplate from '../templates/PortfolioTemplate';
import '../css/index.css';
// images
import maressaPortfolioImg from '../images/portfolio-images/portfolio-maressa.png';
import maressaFeatured from '../images/case-study-images/maressa/maressa-featured-articles.png';
import maressaPortfolio from '../images/case-study-images/maressa/maressa-portfolio-images.png';
import maressaSparkle from '../images/case-study-images/maressa/maressa-sparkle.png';

// markup
const PortfolioMaressa = () => {
  // data
  const maressaPortfolioIntroData = {
    title: 'Maressa Brown',
    subtitle:
      'Professional website for freelance journalist, editor and astrologer.',
    services: [
      'UX/UI design',
      'Front-end development, HTML/CSS/JS',
      'Custom Wordpress theme',
      'Hosting & Domain setup'
    ],
    websiteName: 'www.maressabrown.com',
    websiteURL: 'https://maressabrown.com',
    img: maressaPortfolioImg
  };

  const maressaCaseStudy = [
    {
      heading: 'The Project',
      paragraphs: [
        'Maressa is a freelance lifestyle journalist, content strategist, author, editor and astrologer. The website she was using to showcase her work was very outdated and difficult to use. She needed a website to display her professional work and give a sense of her personality.'
      ],
      images: []
    },
    {
      heading: 'Up-to-date Articles',
      paragraphs: [
        'Journalists need to show off their most recent and relevant work, and Maressa is no different. It was important for her to display various featured articles right at the top of her website where users could easily find them.'
      ],
      images: [
        {
          pic: maressaFeatured,
          caption: 'Featured Stories on Home Page'
        }
      ]
    },
    {
      heading: 'Personality First',
      paragraphs: [
        'Maressa is an incredibly fun person to work with! That needed to be made clear on her website. I included many fun details such as interesting photos and bright colors throughout the site.'
      ],
      images: [
        {
          pic: maressaSparkle,
          caption: 'Pops of sparkle — logo & background image'
        },
        {
          pic: maressaPortfolio,
          caption: 'Bright, fun images'
        }
      ]
    },
    {
      heading: 'Results',
      paragraphs: [
        'Maressa loves her new site, and I’ve continued to work with her to add new features. She reported an increase in website traffic after the launch of her site, and plans to use this website to promote her new upcoming book.'
      ],
      images: []
    }
  ];

  return (
    <main className='portfolio-page'>
      <title>Meredith Grubbs | Web Designer and Developer</title>
      <PortfolioTemplate
        data={maressaPortfolioIntroData}
        casestudy={maressaCaseStudy}
      />
    </main>
  );
};

export default PortfolioMaressa;
