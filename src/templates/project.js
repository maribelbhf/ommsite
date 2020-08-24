import React from "react"

import { graphql } from "gatsby"
import Post from "../components/post"
import styled from "styled-components"

import "../test.css"

export default function BlogPost({ data, pageContext }) {
  const Card = styled.div`
    height: 100vh;
    width: 100;
    background: linear-gradient(
        0deg,
        rgba(51, 51, 51, 0.5),
        rgba(51, 51, 51, 0.5)
      ),
      url(${props => props.background});
    background-size: cover;
    border-radius: 4px;
    text-align: center;
  `

  const Spinner = styled.div`
 display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: #ec008c;
  animation: spin 0.4s ease-in-out infinite;
  -webkit-animation: spin 0.5s ease-in-out infinite;

  position: absolute;
  top: 50%;
  left: 50%;

}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
  `

  return (
    <>
      <Post data={[data]} />
    </>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          slug
          title
          id
          workInfo {
            name
            about
            image1 {
              sourceUrl
            }
            cover {
              sourceUrl
            }
            image2 {
              sourceUrl
            }
          }
          link
          categories {
            nodes {
              id
            }
          }
        }
      }
    }
  }
`
