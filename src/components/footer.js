import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
`)

    return (
        <footer>
            <p> Created a Footer in 2020 by {data.site.siteMetadata.author} </p>
        </footer>
    )
}


export default Footer