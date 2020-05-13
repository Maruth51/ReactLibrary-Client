import React, { Fragment } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { UserComponent } from "./User";

const NavbarComponent = () => {
  return (
    <Fragment>
      <Navbar bg="dark" className="sticky-top" variant="dark" expand="md">
        <Navbar.Brand>React Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <NavLink
                className="nav-link"
                activeClassName={"active"}
                to="/"
                exact
              >
                Home
              </NavLink>
            </Nav.Item>
            <UserComponent />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default NavbarComponent;
