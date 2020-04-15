const path = require(`path`);

module.exports = {
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/templates`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `localShows`,
        path: path.join(`src`, `shows`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
