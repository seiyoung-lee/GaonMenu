module.exports = {
    siteMetadata: {
      title: `Gaon`,
      description: `El menu de Gaon, restaurante tradicional de Corea del Sur.`,
    },
    plugins: ["gatsby-plugin-sass", 
              "gatsby-plugin-smoothscroll", 
              "gatsby-plugin-react-helmet",
              {
                resolve: `gatsby-source-filesystem`,
                options: {
                  name: `images`,
                  path: `${__dirname}/src/components/assets/images`
                },
              },
              `gatsby-plugin-sharp`,
              `gatsby-transformer-sharp`,
              ]
  };
  