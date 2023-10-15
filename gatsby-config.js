/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [ {
    resolve: 'gatsby-source-graphql',
    options: {
      typeName: 'WPGraphQL',
      fieldName: 'wpgraphql',
      url: 'http://cinemap.local/graphql'

    }
  }]
};
