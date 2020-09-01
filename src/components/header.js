import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import logo from "../images/omm_logo.png"
import toggle from "../images/menu.svg"

const Header = () => {
  return (
    <header className="home-align-home">
      <div className="logo-home">
        <Link to="/">
          <img src={logo} style={{ width: `7em` }} />
        </Link>
      </div>
      <div className="toggle-home">
        <Link to="/">
          <img src={toggle} style={{ width: `2.5em` }} />
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
