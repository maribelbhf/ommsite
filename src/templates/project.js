import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Post from "../components/post"
import styled from "styled-components"
import "../test.css"

export default function BlogPost({ data }) {
  const Card = styled.div`
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 80vw;
    height: 50vh;
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
  bottom:0;
  right:0;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
  `

  const ProjectTitle = styled.h1`
    color: white;
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `

  return (
    <>
      <Card
        className="loader-container"
        background={data.allWpPost.edges[0].node.workInfo.cover.sourceUrl}
      >
        <ProjectTitle>{data.allWpPost.edges[0].node.title}</ProjectTitle>
        <Spinner />
      </Card>
      <Post data={data} />
    </>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
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
            image3 {
              sourceUrl
            }
            image4 {
              sourceUrl
            }
            image5 {
              sourceUrl
            }
          }
          link
        }
      }
    }
  }
`
