import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Header from "../components/header"
import styled from "styled-components"
import ContactForm from "../components/form"
import ComingNext from "../components/ComingNext"
import Footer from "../components/footer"

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

  const ProjectHeader = styled.div``
  const Title = styled.h1`
    color: white;
    margin-top: 2.5em;
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
  const post = data[0].allWpPost.edges[0].node
  const postTitle = post.workInfo.name.toUpperCase()

  const categoryId = post.categories.nodes[0].id

  return (
    <>
      <Layout>
        <Header />
        <ProjectHeader>
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
