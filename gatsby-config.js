module.exports = {
  
  siteMetadata: {
    title: 'full-stack development!',
    author: 'Florian'
  },


  plugins: [

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'wz1ljcmn46db',
        accessToken: 'Vy7DAPwXJxkGm4AzwjVbIkoqv-6HCajnXqZtulvt7ok',
      }

    },

    'gatsby-plugin-sass',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },

    'gatsby-plugin-sharp',

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
            'gatsby-remark-relative-images',
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 750,
                linkImagesToOriginal: false
              }
            }
        ]
      }
    }
  ]
}