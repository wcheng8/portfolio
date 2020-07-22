import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap"

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
              <NavLink className="nav-link" href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="/portfolio">
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="/contact">
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
