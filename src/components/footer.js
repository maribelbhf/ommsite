import React from "react"
import { Link } from "gatsby"
import logo from "../images/omm_logo.png"
import styled from "styled-components"

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <Link to="/">
          <img src={logo} style={{ width: `7em` }} />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
