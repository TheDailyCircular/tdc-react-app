import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap';

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
    console.log(this.state);
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

export default CreateCircular;