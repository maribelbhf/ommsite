import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Post({ data }) {
  const [isLoading, SetLoading] = useState(true)

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 6000))
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container")
      if (el) {
        el.remove()
        SetLoading(!isLoading)
      }
    })
  }, [])

  if (isLoading) {
    return null
  }

  const post = data.allWpPost.edges[0].node

  return (
    <>
      <Layout>
        <div>
          <h1>{post.workInfo.name}</h1>
          <p>{post.workInfo.about}</p>
          <div>
            <img src={post.workInfo.cover.sourceUrl}></img>
            <img src={post.workInfo.image1.sourceUrl}></img>
            <img src={post.workInfo.image2.sourceUrl}></img>
            <img src={post.workInfo.image3.sourceUrl}></img>
            <img src={post.workInfo.image4.sourceUrl}></img>
          </div>
        </div>
      </Layout>
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
