import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import logo from "../images/logow.png"
import toggle from "../images/togglew.png"
import styled from "styled-components"

const Headerw = () => {
  const HeaderContainer = styled.header`
    margin-left: 0;
    position: absolute;
    z-index: 10;
  `
  return (
    <HeaderContainer className="home-align">
      <div className="logo">
        <Link to="/">
          <img src={logo} style={{ width: `7em` }} />
        </Link>
      </div>
      <div className="toggle">
        <Link to="/">
          <img src={toggle} style={{ width: `2.5em` }} />
        </Link>
      </div>
    </HeaderContainer>
  )
}

Headerw.propTypes = {
  siteTitle: PropTypes.string,
}

Headerw.defaultProps = {
  siteTitle: ``,
}

export default Headerw
