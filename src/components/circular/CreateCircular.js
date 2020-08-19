import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap';

class CreateCircular extends Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = event => { }

  render() {
    return (
      <Container id="create-circular-container">
        <Form id="create-circular-from" onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Label>Circular Title</Form.Label>
            <Form.Control
              name="title"
              type="text"
            >
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Expiration Date</Form.Label>
            <Form.Control
              name="expirationDate"
              type="date"
            >
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Circular Body</Form.Label>
            <textarea
              className="form-control"
              name="text"
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