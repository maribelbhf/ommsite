import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SlideShow from "../components/slideshow"
import "bootstrap/dist/css/bootstrap.min.css"
import Headerw from "../components/headerw"

const PersonalBrand = () => {
  const query = useStaticQuery(graphql`
    query {
      allWpCategory(filter: { name: { eq: "PERSONAL BRAND" } }) {
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

export default PersonalBrand
