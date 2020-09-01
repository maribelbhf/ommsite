import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ReadMoreContainer = styled.div`
  width: 100vw;
  position: absolute;
  z-index: 10;
  bottom: 2vh;
  text-align: center;
`

const ReadMore = ({ post }) => {
  return (
    <ReadMoreContainer>
      <Link to={post}>Leer Case Study</Link>
    </ReadMoreContainer>
  )
}
export default ReadMore
