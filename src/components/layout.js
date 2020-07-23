import React from "react"
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

export default Layout
