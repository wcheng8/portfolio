import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Header from "./header"
import "./layout.css"
import AppNavbar from "./AppNavbar"
import { Container } from "react-bootstrap"

function Layout(props) {
  return (
    <div>
      <AppNavbar />
      <Container className="pt-4">{props.children}</Container>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
