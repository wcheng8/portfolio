import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"
import { Link } from "gatsby"

const AppNavbar = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

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
              <Link className="nav-link" activeClassName="active" to="/">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" activeClassName="active" to="/about">
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="nav-link"
                activeClassName="active"
                to="/portfolio"
              >
                Portfolio
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" activeClassName="active" to="/contact">
                Contact
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default AppNavbar
