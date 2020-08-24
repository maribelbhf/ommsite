import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ComingNext = ({ Slug, Category }) => {
  let categoryPosts = []
  let postID = 0
  let currentPostId = 0
  let nextID = 0
  let count = 0
  let nextPost = []
  let nextPostSlug = ""

  const search = useStaticQuery(graphql`
    query {
      allWpPost {
        edges {
          node {
            id
            categories {
              nodes {
                id
                name
                posts {
                  nodes {
                    id
                    slug
                    workInfo {
                      cover {
                        sourceUrl
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const wpPost = search.allWpPost.edges
  wpPost.forEach(function (element) {
    const queryPosts = element.node.categories.nodes[0]

    if (queryPosts.id == Category) {
      if (count === 0) {
        count = 1

        const queryPostsArray = queryPosts.posts.nodes

        queryPostsArray.forEach(function (post) {
          let postData = {}
          postID = postID + 1
          postData.id = postID
          postData.slug = post.slug
          postData.cover = post.workInfo.cover.sourceUrl

          categoryPosts.push(postData)
        })
      }
    }
  })

  categoryPosts.forEach(function (post) {
    console.log(Slug, " ", post.slug)

    if (post.slug === Slug) {
      currentPostId = post.id
    }

    if (categoryPosts.length === currentPostId) {
      nextID = 1
      nextPost = categoryPosts[0]
      nextPostSlug = "/" + nextPost.slug
    } else {
      if (currentPostId == 0) {
      } else {
        nextID = currentPostId + 1
        nextPost = categoryPosts[currentPostId]

        nextPostSlug = nextPost.slug
        nextPostSlug = "/" + nextPost.slug
      }
    }
  })

  const NextProject = styled.div`
    height: 70vh;
    border-bottom: 2px solid grey;
    border-top: 2px solid grey;
    margin-top: 5vh;
  `
  const Card = styled.div`
    background: url(${props => props.background});
    background-size: cover;
    background-position: center;
    height: 60%;
  `
  const Title = styled.div`
    color: white;
    font-size: 2em;
    font-weight: light;
    height: 2.4em;
    font-family: Avenir;
    line-height: 1em;

    margin-top: 10vh;
    @media only screen and (max-width: 559px) {
      font-size: 1.4em;
    }
  `
  const Back = styled.div`
    color: #ec008c;
    font-size: 1.2em;
    font-family: Avenir;
    text-align: end;
    margin-top: 1em;
    text-decoration: none;
  `

  return (
    <>
      <NextProject>
        <Title>Continúa viendo...</Title>
        <AniLink paintDrip to={nextPostSlug} hex="#333333">
          <Card background={nextPost.cover}></Card>
        </AniLink>

        <AniLink paintDrip to="/" hex="#333333">
          <Back>Volver a casos</Back>
        </AniLink>
      </NextProject>
    </>
  )
}

export default ComingNext
