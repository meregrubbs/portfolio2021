module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Meredith Grubbs | Web Designer & Developer',
    description:
      'Meredith Grubbs is a freelance web designer and developer based in Durango, CO. She specializes in designing websites for small businesses.'
  },
  plugins: [
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-179308532-1'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        icon: 'src/images/meg-logo-1.png'
      }
    }
  ]
};
