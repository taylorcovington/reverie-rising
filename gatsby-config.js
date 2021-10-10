module.exports = {
  siteMetadata: {
    siteUrl: "http://reverie-rising.local",
    title: "Reverie Rising",
    description: "add here",
    author: "Kayley Klindt"
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://reverie-rising.local/graphql",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-166860256-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
