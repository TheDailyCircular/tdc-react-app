import React, { Component } from 'react';
import './LoginRegistration.css';
import { Container, Form, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/SecurityActions';
import classnames from 'classnames';

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      errors: {
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
      }
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.validateUserInput = this.validateUserInput.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onResetHandler = this.onResetHandler.bind(this);
  }

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  validateUserInput = user => {
    let isVaid = true;
    let tmpErrors = this.state.errors;
    if ((user.firstName.trim()).length === 0) {
      isVaid = false;
      tmpErrors.firstName = "First Name is reqired";
    }
    if ((user.lastName.trim()).length === 0) {
      isVaid = false;
      tmpErrors.lastName = "Last Name is reqired";
    }
    if ((user.username.trim()).length === 0) {
      isVaid = false;
      tmpErrors.username = "Email is reqired";
    }
    if (user.password.length < 8) {
      isVaid = false;
      tmpErrors.password = "Password must be at least 8 characters";
    }
    if (user.password !== user.confirmPassword) {
      isVaid = false;
      tmpErrors.confirmPassword = "Password doesnot match";
    }

    this.setState({ errors: tmpErrors });
    return isVaid;
  }

  onSubmitHandler = event => {
    event.preventDefault();
    const newUser = {
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };
    if (this.validateUserInput(newUser) === false) {
      alert("Provided data is not valid");
    }
    else {
      this.props.registerUser(newUser, this.props.history);
    }
  }

  onResetHandler = event => {
    let tmpState = {
      username: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      errors: {
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
      }
    };
    this.setState(tmpState);
  }

  render() {
    const { error } = this.props;

    return (
      <Container id="registration-container">
        <Jumbotron>
          <Form onSubmit={this.onSubmitHandler} onReset={this.onResetHandler}>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm={3} id="registration-form-label">{"First Name: "}</Form.Label>
              <Col sm={9}>
                <Form.Control
                  className={classnames(
                    "form-control from-control-lg",
                    { "is-invalid": (error.firstName || this.state.errors.firstName) }
                  )}
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.onChangeHandler}
                />
                {(error.firstName || this.state.errors.firstName) && (
                  <div className="invalid-feedback">
                    {error.firstName ? error.firstName : this.state.errors.firstName}
                  </div>
                )}
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm={3} id="registration-form-label">{"Last Name: "}</Form.Label>
              <Col sm={9}>
                <Form.Control
                  className={classnames(
                    "form-control from-control-lg",
                    { "is-invalid": (error.lastName || this.state.errors.lastName) }
                  )}
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.onChangeHandler}
                />
                {(error.lastName || this.state.errors.lastName) && (
                  <div className="invalid-feedback">
                    {error.lastName ? error.lastName : this.state.errors.lastName}
                  </div>
                )}
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm={3} id="registration-form-label">{"Email: "}</Form.Label>
              <Col sm={9}>
                <Form.Control
                  className={classnames(
                    "form-control from-control-lg",
                    { "is-invalid": (error.username || this.state.errors.username) }
                  )}
                  name="username"
                  type="email"
                  placeholder="Email"
                  value={this.state.username}
                  onChange={this.onChangeHandler}
                />
                {(error.username || this.state.errors.username) && (
                  <div className="invalid-feedback">
                    {error.username ? error.username : this.state.errors.username}
                  </div>
                )}
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm={3} id="registration-form-label">{"Password: "}</Form.Label>
              <Col sm={9}>
                <Form.Control
                  className={classnames(
                    "form-control from-control-lg",
                    { "is-invalid": (error.password || this.state.errors.password) }
                  )}
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onPaste={event => event.preventDefault()}
                  onChange={this.onChangeHandler}
                />
                {(error.password || this.state.errors.password) && (
                  <div className="invalid-feedback">
                    {error.password ? error.password : this.state.errors.password}
                  </div>
                )}
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm={3} id="registration-form-label">{"Confirm Password: "}</Form.Label>
              <Col sm={9}>
                <Form.Control
                  className={classnames(
                    "form-control from-control-lg",
                    { "is-invalid": (error.confirmPassword || this.state.errors.confirmPassword) }
                  )}
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={this.state.confirmPassword}
                  onPaste={event => event.preventDefault()}
                  onChange={this.onChangeHandler}
                />
                {(error.confirmPassword || this.state.errors.confirmPassword) && (
                  <div className="invalid-feedback">
                    {error.confirmPassword ? error.confirmPassword : this.state.errors.confirmPassword}
                  </div>
                )}
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm={3} id="registration-form-label"></Form.Label>
              <Col sm={2}>
                <Button variant="success" type="submit">Register</Button>
              </Col>
              <Col md={7}>
                <Button type="reset">Reset</Button>
              </Col>
            </Form.Group>
          </Form>
        </Jumbotron>
      </Container>
    )
  }
}

Registration.protoType = {
  error: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  error: state.error
});

const mapDispatchToProps = {
  registerUser: registerUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
