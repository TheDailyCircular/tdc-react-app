import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
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
  }

  render() {
    return (
      <Modal
        size="sm"
        centered
        show={this.props.show}
        onHide={this.props.onHideHandler}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="login-from" onSubmit={this.onSubmitHandler}>
            <Form.Group>
              <Form.Control
                type="email"
                name="username"
                placeholder="Email"
                value={this.state.username}
                onChange={this.onChangeHandler}
              >
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChangeHandler}
              >
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Button className="form-control" type="submit">Login</Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Link to='/register' onClick={this.props.onHideHandler} >
            <Button size="sm" variant="success">Sign up</Button>
          </Link>
          <Button size="sm" variant="danger" onClick={this.props.onHideHandler} >Forget Password</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default Login;