import React, { Component } from 'react';
import './LoginRegistration.css';
import { Container, Form, Row, Col, Jumbotron, Button } from 'react-bootstrap';

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      errors: {}
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    const newUser = {
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };
    console.log(newUser);
  }

  render() {
    return (
      <Container id="registration-container">
        <Jumbotron>
          <Form onSubmit={this.onSubmitHandler}>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm={3} id="registration-form-label">{"First Name: "}</Form.Label>
              <Col sm={9}>
                <Form.Control
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                  value={this.state.firstName}
                  onChange={this.onChangeHandler}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm={3} id="registration-form-label">{"Last Name: "}</Form.Label>
              <Col sm={9}>
                <Form.Control
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                  value={this.state.lastName}
                  onChange={this.onChangeHandler}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm={3} id="registration-form-label">{"Email: "}</Form.Label>
              <Col sm={9}>
                <Form.Control
                  name="username"
                  type="email"
                  placeholder="Email"
                  required
                  value={this.state.username}
                  onChange={this.onChangeHandler}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm={3} id="registration-form-label">{"Password: "}</Form.Label>
              <Col sm={9}>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  value={this.state.password}
                  onChange={this.onChangeHandler}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm={3} id="registration-form-label">{"Confirm Password: "}</Form.Label>
              <Col sm={9}>
                <Form.Control
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  required
                  value={this.state.confirmPassword}
                  onChange={this.onChangeHandler}
                />
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

export default Registration;
