import * as React from 'react';
import SearchEngineOps from '../../templates/SearchEngineOps';
import PortfolioTemplate from '../../templates/PortfolioTemplate';
import '../../css/index.css';
// images
import fmFlyerFront from '../../images/portfolio-images/fm-flyer-front.png';
import fmFlyerFrontSmall from '../../images/portfolio-images/fm-flyer-front-small.png';
import fmFlyerBack from '../../images/case-study-images/frost-methane/fm-flyer-back.png';
import fmFlyerBackSmall from '../../images/case-study-images/frost-methane/fm-flyer-back-small.png';

// markup
const FrostMethane = () => {
  // data
  const fmIntroData = {
    title: 'Frost Methane Flyer',
    subtitle:
      'Flyer design for Frost Methane — used as an informational visual at a conference to introduce the company',
    services: ['UI design', 'Graphic design'],
    websiteName: 'https://alicedubin.substack.com/',
    websiteURL: 'https://alicedubin.substack.com/',
    img: fmFlyerFront,
    imgSrcSet: `${fmFlyerFrontSmall} 800w, ${fmFlyerFront} 1200w`
  };

  const fmCaseStudy = [
    {
      heading: 'The Project',
      paragraphs: [
        'Frost Methane was attending a mining conference and needed a visual to bring and hand out to potential clients. The visual needed to be professional, informational and scientific.'
      ],
      images: []
    },
    {
      heading: 'Full Flyer Design',
      paragraphs: [],
      images: [
        {
          caption: 'Front of flyer',
          pic: fmFlyerFront,
          srcset: `${fmFlyerFrontSmall} 800w, ${fmFlyerFront} 1200w`
        },
        {
          caption: 'Back of flyer',
          pic: fmFlyerBack,
          srcset: `${fmFlyerBackSmall} 800w, ${fmFlyerBack} 1200w`
        }
      ]
    }
  ];

  return (
    <main className='portfolio-page'>
      <SearchEngineOps />
      <PortfolioTemplate data={fmIntroData} casestudy={fmCaseStudy} />
    </main>
  );
};

export default FrostMethane;
