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

  const ArtistCard = styled.div`
    position: relative;
  `

  const ArtistCardDescription = styled.div`
    z-index: 10;
    position: absolute !important;
    bottom: 4em;
    left: 10em;
    color: white;
    width: 12.5em;
  `
  const Sign = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    width: 12.5em;
    font-size: 0.8em;
  `
  const Square = styled.div`
    width: 1.5em;
    background-color: #ec008c;
    height: 0.5em;
  `

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <Header />
        <Slogan className="slogan">
          Inspiring sensations, forming bonds, creating brands.
        </Slogan>
        <Link to="">
          <LinkTag>Work></LinkTag>
        </Link>
      </Layout>
      <Image />
      <Layout>
        <Text>
          OMM Agency es una galardonada firma de consultoría de branding de
          marcas y celebridades, con más de 300 marcas asesoradas en una docena
          de países.
        </Text>
        <Link to="">
          <LinkTag>About ></LinkTag>
        </Link>
      </Layout>

      <Img
        fluid={
          data.allWpPage.edges[0].node.ClientCards.firstClient.clientMockup
            .localFile.childImageSharp.fluid
        }
        className="homeClient"
        loading="eager"
      />
      <ArtistCard>
        <Img
          fluid={
            data.allWpPage.edges[0].node.ClientCards.secondClient.clientMockup
              .localFile.childImageSharp.fluid
          }
          className="homeClient"
          loading="eager"
        />

        <ArtistCardDescription>
          <Img
            fixed={
              data.allWpPage.edges[0].node.ClientCards.secondClient.clientLogo
                .localFile.childImageSharp.fixed
            }
          />
          <p>Lorem Ipsum</p>
          <Sign>
            <Square />
            <p>Mira el Case Study</p>
          </Sign>
        </ArtistCardDescription>
      </ArtistCard>

      <ArtistCard>
        <Img
          fluid={
            data.allWpPage.edges[0].node.ClientCards.thirdClient.clientMockup
              .localFile.childImageSharp.fluid
          }
          className="homeClient"
          loading="eager"
        />

        <ArtistCardDescription>
          <Img
            fixed={
              data.allWpPage.edges[0].node.ClientCards.thirdClient.clientLogo
                .localFile.childImageSharp.fixed
            }
          />
          <p>Lorem Ipsum</p>
          <Sign>
            <Square />
            <p>Mira el Case Study</p>
          </Sign>
        </ArtistCardDescription>
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
              clientTitle
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
              clientTitle
              clientMockup {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 3500, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              clientLogo {
                localFile {
                  childImageSharp {
                    fixed(width: 400) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
            thirdClient {
              clientTitle
              clientMockup {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 3500, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              clientLogo {
                localFile {
                  childImageSharp {
                    fixed(width: 400) {
                      ...GatsbyImageSharpFixed
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
