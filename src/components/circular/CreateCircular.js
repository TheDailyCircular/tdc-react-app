import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createCircular } from '../../actions/CircularActions';

class CreateCircular extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      title: "",
      expirationDate: "",
      text: "",
      errors: {}
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmitHandler = event => {
    event.preventDefault();
    let tmpUser = {
      username: this.props.security.user.username
    };
    const newCircular = {
      id: this.state.id,
      title: this.state.title,
      expirationDate: this.state.expirationDate,
      text: this.state.text,
      user: tmpUser 
    };
    console.log(newCircular);
    // this.props.createCircular(newCircular, this.props.history);
  }

  render() {
    return (
      <Container id="create-circular-container">
        <Form id="create-circular-from" onSubmit={this.onSubmitHandler}>
          <Form.Group>
            <Form.Label>Circular Title</Form.Label>
            <Form.Control
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.onChangeHandler}
            >
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Expiration Date</Form.Label>
            <Form.Control
              name="expirationDate"
              type="date"
              value={this.state.expirationDate}
              onChange={this.onChangeHandler}
            >
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Circular Body</Form.Label>
            <textarea
              className="form-control"
              id="circular-text-area"
              name="text"
              value={this.state.text}
              onChange={this.onChangeHandler}
            >
            </textarea>
          </Form.Group>
          <Form.Group>
            <Button className="form-control" type="submit">Post</Button>
          </Form.Group>
        </Form>
      </Container>
    )
  }
}

CreateCircular.protoType = {
  error: PropTypes.object.isRequired,
  circular: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired,
  createCircular: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  error: state.error,
  circular: state.circular.circular,
  security: state.security
});

const mapDispatchToProps = {
  createCircular: createCircular
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCircular);