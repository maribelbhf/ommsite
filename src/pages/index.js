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

  return (
    <>
      <Layout>
        <SEO title="home" />
        <Header />
        <Slogan className="slogan">
          Inspiring sensations, forming bonds, creating brands.
        </Slogan>
      </Layout>
      <Image />
      <Layout>
        <Text>
          OMM Agency es una galardonada firma de consultoría de branding de
          marcas y celebridades, con más de 300 marcas asesoradas en una docena
          de países.
        </Text>
      </Layout>
      <Img
        fluid={
          data.allWpPage.edges[0].node.ClientCards.firstClient.clientMockup
            .localFile.childImageSharp.fluid
        }
        className="homeClient"
      />
      <Img
        fluid={
          data.allWpPage.edges[0].node.ClientCards.secondClient.clientMockup
            .localFile.childImageSharp.fluid
        }
        className="homeClient"
      />
      <Img
        fluid={
          data.allWpPage.edges[0].node.ClientCards.thirdClient.clientMockup
            .localFile.childImageSharp.fluid
        }
        className="homeClient"
      />
      <Layout>
        <Formula>
          Investigaci&oacute;n + Desarrollo + <strong>Innovaci&oacute;n</strong>
        </Formula>
      </Layout>
      <Layout>
        <Title>
          ¿Listo para trabajar <br /> con nosotros?
        </Title>
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
            }
          }
        }
      }
    }
  }
`
