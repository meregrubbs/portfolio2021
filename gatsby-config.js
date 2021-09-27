module.exports = {
  siteMetadata: {
    url: 'https://www.meredithgrubbs.com',
    title: 'Meredith Grubbs | Web Designer & Developer',
    description:
      'Meredith Grubbs is a freelance web designer and developer based in Durango, CO. She specializes in designing websites for small businesses.',
    image: '/og-image.jpg'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-179308532-1'
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        icon: 'src/images/meg-logo.svg'
      }
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        collectionTypes: ['explorations', 'testimonials', 'categories'],
        queryLimit: 1000
      }
    }
  ]
};
