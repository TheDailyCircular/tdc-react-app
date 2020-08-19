import React, { Component } from 'react';
import './Circulars.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class Circular extends Component {
  render() {
    const expirationDate = new Date(this.props.circular.expirationDate);

    return (
      <Container id="circular-container">
        <Row id="cicular-row1">
          <Col md={11}>
            <h4>{this.props.circular.title}</h4>
            <p>{this.props.circular.text}</p>
          </Col>
          <Col md={1} id="circular-deadline-col">
            <div>Deadline</div>
            <div id="exp-date-div">{expirationDate.getDate()}</div>
            <div>{monthNames[expirationDate.getMonth()] + ", " + expirationDate.getFullYear()}</div>
          </Col>
        </Row>
        <Row id="#cicular-row2">
          <Col md={4}>
            View | Share
          </Col>
          <Col md={8}>
            Like | Dislike | Comment
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Circular;