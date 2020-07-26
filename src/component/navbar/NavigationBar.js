import React, { Component } from 'react'
import './NavigationBar.css';
import { Row, Col, Navbar, Nav, Container } from 'react-bootstrap';



class NavigationBar extends Component {
  render() {
    return (
      <Row>
        <Col md={12}>
          <Navbar
            collapseOnSelect
            expand="lg"
            id="tdc-nav-bar"
          >
            <Container>
              <Navbar.Brand href="/profile">
                <img className="rounded" src="./woody.jpeg" alt="user" height="45px" width="45px" />
                {" User Profile"}
              </Navbar.Brand>
            </Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto" />
              <Nav>
                <Nav.Item>
                  <Nav.Link href="/posts" >Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/messages" >Messages</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/circulars" >Circulars</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/others" >Others</Nav.Link>
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
