import * as React from 'react';
import SEO from '../../templates/SEO';
import PortfolioTemplate from '../../templates/PortfolioTemplate';
import '../../css/index.css';
// images
import alicePortfolioImg from '../../images/portfolio-images/portfolio-alice.png';
import alicePortfolioImgSmall from '../../images/portfolio-images/portfolio-alice-small.png';
import casestudyMainPortfolioPageImg from '../../images/case-study-images/alice/alice-main-portfolio-page.jpg';
import casestudyJournalism from '../../images/case-study-images/alice/alice-journalism.jpg';
import casestudyContentMarketing from '../../images/case-study-images/alice/alice-content-marketing.jpg';
import casestudyClientCollage from '../../images/case-study-images/alice/alice-client-collage.jpg';

// markup
const PortfolioAlice = () => {
  // data
  const alicePortfolioIntroData = {
    title: 'Alice Dubin Media',
    subtitle: 'An online portfolio showcasing professional journalism work.',
    services: [
      'UX/UI design',
      'Front-end development, HTML/CSS/JS',
      'Custom Wordpress theme',
      'Hosting & Domain setup'
    ],
    websiteName: 'www.alicedubin.com',
    websiteURL: 'https://alicedubin.com',
    img: alicePortfolioImg,
    imgSrcSet: `${alicePortfolioImgSmall} 800w, ${alicePortfolioImg} 1200w`
  };

  const aliceCaseStudy = [
    {
      heading: 'The Project',
      paragraphs: [
        'Alice Dubin is a professional journalist and content marketing writer. She’s written for major publications such as Bravo TV, Business Insider, Good Housekeeping, Parents Magazine and many more.',

        'As a freelance journalist, much of her work was scattered around across many different websites. She needed a good website to showcase all of her work in one place.'
      ],
      images: []
    },
    {
      heading: 'Organization is Key',
      paragraphs: [
        'As Alice had work in both the journalism space as well as the content marketing space, it was important to come up with a solutions for users to easily flip through her work. '
      ],
      images: [
        {
          pic: casestudyMainPortfolioPageImg,
          caption: 'Main Portfolio Page'
        }
      ]
    },
    {
      heading: 'Viewable by Category',
      paragraphs: [
        'In addition to work being divided into journalism verses content marketing, she also needed her articles to be divided according to the topic.',

        'A prospective client may just be interested in a specific subject matter, or they might be interested in viewing all of Alice’s work. We needed to make it easy for whichever type of user may be visiting her website.'
      ],
      images: [
        {
          pic: casestudyJournalism,
          caption: 'Journalism Page'
        },
        {
          pic: casestudyContentMarketing,
          caption: 'Content Marketing Page'
        }
      ]
    },
    {
      heading: 'Brand Recognition',
      paragraphs: [
        'One of the most important things to Alice’s prospective clients is brand recognition of her past work. If she could easily show the companies she’s worked with in the past, that would give her instant credibility.'
      ],
      images: [
        {
          pic: casestudyClientCollage,
          caption: 'Client Collage on Home Page'
        }
      ]
    },
    {
      heading: 'Results',
      paragraphs: [
        'The website was a success, and I’ve continued to work with Alice on new features for her website. She reported a significant increase in new business after the launch of her website.'
      ],
      images: []
    }
  ];

  return (
    <main className='portfolio-page'>
      <SEO />
      <PortfolioTemplate
        data={alicePortfolioIntroData}
        casestudy={aliceCaseStudy}
      />
    </main>
  );
};

export default PortfolioAlice;
