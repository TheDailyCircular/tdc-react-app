import React, { Component } from 'react';
import './NavigationBar.css';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBell, faPowerOff } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/SecurityActions';
import Login from '../user/Login';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: false
    };
    this.showLoginForm = this.showLoginForm.bind(this);
    this.onHideLoginForm = this.onHideLoginForm.bind(this);
    this.processLogout = this.processLogout.bind(this);
  }

  showLoginForm = event => {
    this.setState({ showLoginForm: true });
  }

  onHideLoginForm = event => {
    this.setState({ showLoginForm: false });
  }

  processLogout = event => {
    if (
      window.confirm("Do you want to logout?")
    ) {
      this.props.logout();
      window.location.href = "/";
    }
  };

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" sticky="top" id="tdc-navbar" >
        <Container id="navbar-container">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {this.props.isUserLoggedIn ? <Link className="nav-link" id="tdc-nav-link" to="/posts" >Posts</Link> : ""}
              <Link className="nav-link" id="tdc-nav-link" to="/circulars" >Circulars</Link>
              <Link className="nav-link" id="tdc-nav-link" to="/others" >Others</Link>
            </Nav>
            <Nav>
              {!this.props.isUserLoggedIn ?
                <Container id="tdc-before-login-menu-container">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={this.showLoginForm}
                  >
                    Login
                  </Button>
                  <Login
                    show={this.state.showLoginForm}
                    onHideHandler={this.onHideLoginForm}
                  />
                </Container> : ""
              }
              {!this.props.isUserLoggedIn ?
                <Container id="tdc-before-login-menu-container">
                  <Link to="/register">
                    <Button
                      size="sm"
                      variant="success"
                    >
                      Register
                    </Button>
                  </Link>
                </Container> : ""
              }

              {this.props.isUserLoggedIn ?
                <Container key={0}>
                  <Link className="nav-link" id="tdc-nav-link" to="/notification" >
                    <FontAwesomeIcon icon={faBell} size="lg" />
                  </Link>
                </Container> : ""
              }
              {this.props.isUserLoggedIn ?
                <Container key={1}>
                  <Link className="nav-link" id="tdc-nav-link" to="/messages" >
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  </Link>
                </Container> : ""
              }
              {this.props.isUserLoggedIn ?
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
                  <NavDropdown.Item>
                    <Button
                      id="logout-btn"
                      size="sm"
                      variant="outline-danger"
                      onClick={this.processLogout}
                    >
                      <FontAwesomeIcon icon={faPowerOff} />
                      {" Logout"}
                    </Button>
                  </NavDropdown.Item>
                </NavDropdown> : ""
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

NavigationBar.protoType = {
  isUserLoggedIn: PropTypes.oneOfType.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isUserLoggedIn: state.security.isValidToken
});

const mapDispatchToProps = {
  logout: logout
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
