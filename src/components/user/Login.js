import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/SecurityActions';
import classnames from 'classnames';

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
    const loginRequest = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.login(loginRequest);
  }

  render() {
    const { errors } = this.props;

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
                className={classnames(
                  "form-control from-control-lg",
                  { "is-invalid": errors.username }
                )}
                type="email"
                name="username"
                placeholder="Email"
                value={this.state.username}
                onChange={this.onChangeHandler}
              >
              </Form.Control>
              {errors.username && (
                <div className="invalid-feedback">
                  {errors.username}
                </div>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Control
                className={classnames(
                  "form-control from-control-lg",
                  { "is-invalid": errors.password }
                )}
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChangeHandler}
              >
              </Form.Control>
              {errors.password && (
                <div className="invalid-feedback">
                  {errors.password}
                </div>
              )}
            </Form.Group>
            <Form.Group>
              <Button className="form-control" type="submit">Login</Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Link to='/register' onClick={this.props.onHideHandler} >
            <Button size="sm" variant="success">Register</Button>
          </Link>
          <Button size="sm" variant="danger" onClick={this.props.onHideHandler} >Forget Password</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

Login.propTypes = {
  security: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.error,
  security: state.security
});

const mapDispatchToProps = {
  login: login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);