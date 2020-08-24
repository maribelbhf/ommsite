import React from "react"
import { Link, graphql } from "gatsby" //highlight-line
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from "styled-components"
import Image from "../components/image"
import Header from "../components/header"
import Footer from "../components/footer"
import ContactForm from "../components/form"
import scrollTo from "gatsby-plugin-smoothscroll"

import "../components/layout.css"
import "../styles/home.css"

export default function Home({ data }) {
  const Slogan = styled.h2`
    color: white;
    text-align: left;
    font-size: 3em;
    margin-top: 25vh;
    @media only screen and (max-width: 559px) {
      margin-top: 15vh;
      margin-bottom: 10vh;
      font-size: 2em;
    }
  `
  const Text = styled.h3`
    color: white;
    height: 25vh;
    font-size: 2em;
    font-weight: 200;
    margin-top: 20vh;
    margin-bottom: 10vh;
    @media only screen and (max-width: 559px) {
      font-size: 1.4em;
      margin-top: 8vh;
      margin-bottom: 0;
    }
  `

  const Formula = styled.div`
    color: white;
    font-size: 2.5em;
    height: 2.4em;
    border-bottom: 2px solid grey;
    text-align: left;
    font-family: Roboto;
    font-weight: 200;
    margin-top: 10vh;
    @media only screen and (max-width: 559px) {
      line-height: 1em;
      padding-bottom: 3.4em;
      font-size: 1.8em;
      margin-top: 18vh;
      span {
        display: block;
      }
    }
  `

  const Title = styled.div`
    color: white;
    font-size: 2.4em;
    font-weight: bolder;
    height: 2.4em;
    font-family: Roboto;
    line-height: 1em;
    border-bottom: 2px solid grey;
    margin-top: 20vh;
    @media only screen and (max-width: 559px) {
      font-size: 1.4em;
    }
  `

  const LinkTag = styled.p`
    color: #ec008c;
    text-decoration: none;
  `
  const Overlay = styled.div`
    background-color: black;
    z-index: 40;
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0.5;
  `
  const CategoryTitle = styled.a`
    color: white;
    font-size: 5vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    z-index: 50;
    cursor: default;
    &:hover {
      text-decoration: underline;
    }
  `
  const CategoryTitleContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
  `

  const ArtistCard = styled.div`
    position: relative;
  `

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <Header />
        <Slogan className="slogan">
          Inspiring sensations, forming bonds, creating brands.
        </Slogan>
        <a href="#work">
          <LinkTag>Work></LinkTag>
        </a>
      </Layout>
      <Image />
      <Layout>
        <Text>
          OMM Agency es una galardonada firma de consultoría de branding de
          marcas y celebridades, con más de 300 marcas asesoradas en una docena
          de países.
        </Text>
        <Link to="">
          <LinkTag>About></LinkTag>
        </Link>
      </Layout>
      <ArtistCard id="work">
        <Link to="/camilo">
          <Overlay></Overlay>
          <CategoryTitleContainer>
            <CategoryTitle>Music Brand</CategoryTitle>
          </CategoryTitleContainer>
          <Img
            fluid={
              data.allWpPage.edges[0].node.ClientCards.firstClient.clientMockup
                .localFile.childImageSharp.fluid
            }
            className="homeClient"
            loading="eager"
          />
        </Link>
      </ArtistCard>
      <ArtistCard>
        <Link to="/sascha">
          <Overlay></Overlay>
          <CategoryTitleContainer>
            <CategoryTitle>Personal Brand</CategoryTitle>
          </CategoryTitleContainer>
          <Img
            fluid={
              data.allWpPage.edges[0].node.ClientCards.secondClient.clientMockup
                .localFile.childImageSharp.fluid
            }
            className="homeClient"
            loading="eager"
          />
        </Link>
      </ArtistCard>

      <ArtistCard>
        <Link to="/lilis-gourmix">
          <Overlay></Overlay>
          <CategoryTitleContainer>
            <CategoryTitle>Brand</CategoryTitle>
          </CategoryTitleContainer>
          <Img
            fluid={
              data.allWpPage.edges[0].node.ClientCards.thirdClient.clientMockup
                .localFile.childImageSharp.fluid
            }
            className="homeClient"
            loading="eager"
          />
        </Link>
      </ArtistCard>
      <Layout>
        <Formula>
          <span>Investigaci&oacute;n +</span> <span>Desarrollo + </span>
          <span>
            <strong>Innovaci&oacute;n</strong>
          </span>
        </Formula>
      </Layout>
      <Layout>
        <Title>¿Interesado en una consultor&iacute;a?</Title>
      </Layout>
      <Layout>
        <ContactForm />
      </Layout>
      <Footer />
    </>
  )
}

export const query = graphql`
  query {
    allWpPage {
      edges {
        node {
          ClientCards {
            firstClient {
              clientMockup {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 3500, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
            secondClient {
              clientMockup {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 3500, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
            thirdClient {
              clientMockup {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 3500, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
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
`
