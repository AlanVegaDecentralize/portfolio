import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

const ContactNavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="dark" className={"fixed-top"}>
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="/" className="mr-auto">
              Connect
            </NavbarBrand>
            <NavbarToggler
              onClick={toggleNavbar}
              // className={}
            />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink
                    href="https://github.com/AlanVegaDecentralize"
                    target="_blank"
                  >
                    GitHub
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.linkedin.com/in/alan-vega/"
                    target="_blank"
                  >
                    LinkedIn
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default ContactNavBar;
