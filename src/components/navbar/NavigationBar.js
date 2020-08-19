import React, { Component } from 'react'
import './NavigationBar.css';
import { Row, Col, Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



class NavigationBar extends Component {
  render() {
    return (
      <Row id="tdc-nav-bar-row">
        <Col md={12}>
          <Navbar
            collapseOnSelect
            expand="lg"
            id="tdc-nav-bar"
          >
            <Container>
              <Navbar.Brand href="/profile">
                <img className="rounded" src={process.env.PUBLIC_URL + "/woody.jpeg"} alt="user" height="45px" width="45px" />
                {" User Profile"}
              </Navbar.Brand>
            </Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto" />
              <Nav>
                <Nav.Item>
                  <Link className="nav-link" to="/posts" >Posts</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link className="nav-link" to="/messages" >Messages</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link className="nav-link" to="/circulars" >Circulars</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link className="nav-link" to="/others" >Others</Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    )
  }
}

export default NavigationBar;
