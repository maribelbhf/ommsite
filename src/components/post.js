import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import styled from "styled-components"
import ContactForm from "../components/form"
import ComingNext from "../components/ComingNext"
import Footer from "../components/footer"

import AniLink from "gatsby-plugin-transition-link/AniLink"
export default function Post({ data }) {
  const ProjectHeader = styled.div``
  const Title = styled.h1`
    color: white;
    margin-top: 1em;
    font-family: Avenir;
    font-size: 2.5em;
  `
  const Resume = styled.p`
    color: white;
    font-family: Avenir;
    width: 80%;
    margin-top: 2em;
  `
  const FormTitle = styled.div`
    color: white;
    font-size: 2em;
    font-weight: bolder;
    height: 2.4em;
    font-family: Avenir;
    line-height: 1em;
    border-bottom: 2px solid grey;
    margin-top: 20vh;
    @media only screen and (max-width: 559px) {
      font-size: 1.4em;
    }
  `
  const Back = styled.div`
    color: #ec008c;
    font-size: 1em;
    font-family: Avenir;
    text-align: start;
    margin-top: 5em;
    text-decoration: none;
  `
  const post = data[0].allWpPost.edges[0].node
  const postTitle = post.workInfo.name.toUpperCase()

  const categoryId = post.categories.nodes[0].id

  return (
    <>
      <Layout>
        <Header />
        <ProjectHeader>
          <Back>
            <AniLink paintDrip to="/" hex="#333333">
              <Back>Volver a casos</Back>
            </AniLink>
          </Back>
          <Title>{postTitle}</Title>
          <Resume>{post.workInfo.about}</Resume>
        </ProjectHeader>
      </Layout>
      <div>
        <div>
          <img src={post.workInfo.cover.sourceUrl}></img>
          <img src={post.workInfo.image1.sourceUrl}></img>
          <img src={post.workInfo.image2.sourceUrl}></img>
        </div>
      </div>
      <Layout>
        <ComingNext Slug={post.slug} Category={post.categories.nodes[0].id} />
      </Layout>
      <Layout>
        <FormTitle>¿Interesado en una consultor&iacute;a?</FormTitle>
        <ContactForm />
      </Layout>
      <Footer />
    </>
  )
}
