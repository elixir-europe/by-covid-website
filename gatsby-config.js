const path = require('path')

module.exports = {
  pathPrefix: "/by-covid-website",
  siteMetadata: {
    title: `BY-COVID`,
    description:
      'The BY-COVID project aims to make SARS-CoV-2 and other infectious disease data easier to find and access for life scientists and researchers across Europe.',
    author: `Katharina Lauer, Xenia Sitja Perez, Erin Haskell, Martin Cook (ELIXIR Hub)`,
    siteUrl: `https://by-covid.eu/`,
    image: "/images/by-covid-logo.svg",
    twitterUsername: "@BYCOVID_eu",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news-images`,
        path: `${__dirname}/posts/news-images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/by-covid-icon.svg`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: path.resolve('./src/components/layout.js') },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {implementation: require("sass"), },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `partners`,
        path: `./src/data/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
