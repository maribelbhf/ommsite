import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Carousel } from "react-bootstrap"
import CarouselCategory from "./slideshow-category"
import ReadMore from "./readmore"

const SlideShow = ({ data }) => {
  const [clientLink, setClientLink] = useState("")
  const [slideIndex, setSlideIndex] = useState(0)
  const [linkMax, setLinkMax] = useState(0)
  const slide = []
  const mobileSlide = []
  const [contador, setContador] = useState(0)
  const sources = []

  const postArray = data.allWpCategory.edges[0].node.posts.nodes
  const itemLinks = []
  const slug = data.allWpCategory.edges[0].node.slug

  postArray.map(function (item) {
    const link = String(item.uri)
    itemLinks.push(item.uri)

    slide.push([
      item.workInfo.desktopImage.localFile.childImageSharp.fluid,
      item.uri,
    ])
    mobileSlide.push([
      item.workInfo.mobileImage.localFile.childImageSharp.fluid,
      item.uri,
    ])
    sources.push([
      {
        ...item.workInfo.desktopImage.localFile.childImageSharp.fluid,
        media: `(min-width:1020px)`,
      },
      {
        ...item.workInfo.mobileImage.localFile.childImageSharp.fluid,
        media: `(max-width:1019px)`,
      },
    ])
  })

  function increment() {
    const slideMax = slide.length - 1
    if (slideIndex == slideMax) {
      setSlideIndex(0)
      setContador(0)
    } else {
      setSlideIndex(slideIndex + 1)
    }
  }
  if (clientLink == 0) {
    setClientLink(itemLinks[0])
  }
  useEffect(() => {
    setContador(contador + 1)
    setLinkMax(slide.length - 1)

    setClientLink(itemLinks[slideIndex])
  }, [slideIndex])

  return (
    <>
      <Carousel pause="hover" onSlid={increment}>
        {sources.map((item, i) => (
          <Carousel.Item className="min-vh-100">
            <Img fluid={item} style={{ height: `100vh` }} />
          </Carousel.Item>
        ))}
      </Carousel>

      <ReadMore post={itemLinks[slideIndex]} />

      <CarouselCategory current={slug} linkUpdate={itemLinks[slideIndex]} />
    </>
  )
}
export default SlideShow
