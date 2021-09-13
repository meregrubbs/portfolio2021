import * as React from 'react';
import SearchEngineOps from '../../templates/SearchEngineOps';
import PortfolioTemplate from '../../templates/PortfolioTemplate';
import '../../css/index.css';
// images
import aliceSubstack from '../../images/portfolio-images/alice-substack.png';
import aliceSubstackSmall from '../../images/portfolio-images/alice-substack-small.png';
import substackPosts from '../../images/case-study-images/alice-substack/substack-posts.png';
import substackPostsSmall from '../../images/case-study-images/alice-substack/substack-posts-small.png';
import substackEmail from '../../images/case-study-images/alice-substack/substack-email.png';
import substackEmailSmall from '../../images/case-study-images/alice-substack/substack-email-small.png';

// markup
const PortfolioAliceSubstack = () => {
  // data
  const alicePortfolioIntroData = {
    title: 'Substack Graphic Design',
    subtitle:
      'Visual design for a client using Substack – an online newsletter subscription website.',
    services: ['UI design', 'Graphic design'],
    websiteName: 'https://alicedubin.substack.com/',
    websiteURL: 'https://alicedubin.substack.com/',
    img: aliceSubstack,
    imgSrcSet: `${aliceSubstackSmall} 800w, ${aliceSubstack} 1200w`
  };

  const aliceCaseStudy = [
    {
      heading: 'The Project',
      paragraphs: [
        'Alice uses a newsletter subscription website (Substack) and wanted some custom art to use for her posts. She needed the visuals to reflect the branding we came up with on her website.'
      ],
      images: []
    },
    {
      heading: 'Article Post Image',
      paragraphs: ['Here is the main post image in action.'],
      images: [
        {
          caption: 'List of posts',
          pic: substackPosts,
          srcset: `${substackPostsSmall} 800w, ${substackPosts} 1200w`
        }
      ]
    },
    {
      heading: 'Email Header Image',
      paragraphs: [
        'Here is a graphic that shows up when Alice sends out an email notifying her subscribers of a new article.'
      ],
      images: [
        {
          caption: 'Email header image',
          pic: substackEmail,
          srcset: `${substackEmailSmall} 800w, ${substackEmail} 1200w`
        }
      ]
    }
  ];

  return (
    <main className='portfolio-page'>
      <SearchEngineOps />
      <PortfolioTemplate
        data={alicePortfolioIntroData}
        casestudy={aliceCaseStudy}
      />
    </main>
  );
};

export default PortfolioAliceSubstack;
