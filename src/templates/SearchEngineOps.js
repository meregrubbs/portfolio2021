import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const SearchEngineOps = ({ title, description, image }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`
  };

  return (
    <Helmet title={seo.title} htmlAttributes={{ lang: 'en' }}>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />

      {seo.url && <meta property='og:url' content={seo.url} />}

      {seo.title && <meta property='og:title' content={seo.title} />}

      {seo.description && (
        <meta property='og:description' content={seo.description} />
      )}

      {seo.image && <meta property='og:image' content={seo.image} />}

      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:desctiption' content={seo.description} />
      <meta name='twitter:card' content={seo.image} />
    </Helmet>
  );
};

export default SearchEngineOps;

SearchEngineOps.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
};

SearchEngineOps.defaultProps = {
  title: null,
  description: null,
  image: null
};

const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`;
