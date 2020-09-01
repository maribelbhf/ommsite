import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SlideShow from "../components/slideshow"
import Headerw from "../components/headerw"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/slideshow.css"

const Brands = () => {
  const query = useStaticQuery(graphql`
    query {
      allWpCategory(filter: { name: { eq: "BRANDS" } }) {
        edges {
          node {
            id
            posts {
              nodes {
                id
                workInfo {
                  desktopImage: cover {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 3500, quality: 100) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                  mobileImage: mobileCover {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 800, quality: 100) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                }
                slug
                uri
              }
            }
            slug
          }
        }
      }
    }
  `)

  return (
    <div>
      <Headerw />
      <SlideShow data={query} />
    </div>
  )
}

export default Brands
