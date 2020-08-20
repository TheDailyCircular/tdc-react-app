import React, { Component } from 'react';
import './NavigationBar.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" sticky="top" id="tdc-navbar" >
        <Container id="navbar-container">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" id="tdc-nav-link" to="/posts" >Posts</Link>
              <Link className="nav-link" id="tdc-nav-link" to="/circulars" >Circulars</Link>
              <Link className="nav-link" id="tdc-nav-link" to="/others" >Others</Link>
            </Nav>
            <Nav>
              <Container key={0}>
                <Link className="nav-link" id="tdc-nav-link" to="/notification" >
                  <FontAwesomeIcon icon={faBell} size="lg" />
                </Link>
              </Container>
              <Container key={1}>
                <Link className="nav-link" id="tdc-nav-link" to="/messages" >
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </Link>
              </Container>
              <NavDropdown
                title={
                  <img className="rounded-circle z-depth-0"
                    src={process.env.PUBLIC_URL + "/woody.jpeg"}
                    alt="user pic"
                    height="30" width="30"
                  />
                }
                drop="left"
                id="tdc-nav-link"
              >
                <Link className="dropdown-item" id="profile-dropdown-item" to="/profile">Profile</Link>
                <NavDropdown.Divider />
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavigationBar;
