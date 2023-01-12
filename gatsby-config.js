// support for .env, .env.development, and .env.production
require("dotenv").config(/* {
  path: `.env.${process.env.NODE_ENV}`,
} */)
module.exports = {
  siteMetadata: {
    title: `DPC Gatsby Nexus Prototype`,
    description: `Proof of concept for a multi-site search for the UVA Digital Publishing Collaborative`,
    author: `@pls4e`,
  },
  flags: {
    THE_FLAG: false
  },
  plugins: [
    {
      resolve: "gatsby-source-custom-api",
      options: {
          url: "https://dev.bondpapersproject.org/gatsby/docs?_format=json",
          rootKey: 'bondDocs',
          auth: {username: process.env.BOND_BASIC_AUTH_USERNAME, password: process.env.BOND_BASIC_AUTH_PASSWORD },
          schemas:  {
              bondDocs: `
              title: String
              author: String
              body: String
              date: String
              headnote: String
              nid: String
              baseURL: String
              recipient: String
              source: String
              collection: String
              `
          }
      }
  },
  {
      resolve: "gatsby-source-custom-api",
      options: {
          url: "https://thurmanpapersproject.org/gatsby/docs?_format=json",
          rootKey: 'thurmanDocs',
          // not taking data from thurman unless unrestricted
         // auth: { username: process.env.THURMAN_BASIC_AUTH_USERNAME, password: process.env.THURMAN_BASIC_AUTH_PASSWORD },
          schemas:  {
              thurmanDocs: `
                  title: String
                  author: String
                  body: String
                  date: String
                  headnote: String
                  nid: String
                  baseURL: String
                  recipient: String
                  source: String
                  collection: String
              `
          }
      }
  },`gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-plugin-react-helmet`,
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
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")]
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries")
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    }
  ],
}
