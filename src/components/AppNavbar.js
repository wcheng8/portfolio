import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

const AppNavbar = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  function pathIncludes(word) {
    return window.location.pathname.includes(word)
      ? "active nav-link"
      : "nav-link"
  }
  function pathIs(word) {
    return window.location.pathname == word ? "active nav-link" : "nav-link"
  }

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Nav>
          <NavItem className="text-white h3">W</NavItem>
        </Nav>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className={pathIs("/")} href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={pathIncludes("about")} href="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={pathIncludes("portfolio")} href="/portfolio">
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={pathIncludes("contact")} href="/contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default AppNavbar
