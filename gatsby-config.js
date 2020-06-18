module.exports = {
  
  siteMetadata: {
    title: 'full-stack development!',
    author: 'Florian'
  },


  plugins: [
    'gatsby-plugin-sass',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'

  ]

}
