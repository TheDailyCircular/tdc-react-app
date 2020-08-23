import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import './Circulars.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class Circular extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      isLikeButtonClicked: false,
      isDislikeButtonClicked: false
    };
    this.likeButtonHandler = this.likeButtonHandler.bind(this)
    this.dislikeButtonHandler = this.dislikeButtonHandler.bind(this)
  }

  likeButtonHandler = () => {
    let changedState = this.state
    changedState.isLikeButtonClicked = !changedState.isLikeButtonClicked
    if( changedState.isLikeButtonClicked == true ) {
      changedState.likes += 1
      if( changedState.isDislikeButtonClicked == true ) {
        changedState.isDislikeButtonClicked = false
        changedState.dislikes -= 1
      }
    } else {
      changedState.likes -= 1
    }
    this.setState(changedState)
  }

  dislikeButtonHandler = () => {
    let changedState = this.state
    changedState.isDislikeButtonClicked = !changedState.isDislikeButtonClicked
    if( changedState.isDislikeButtonClicked == true ) {
      changedState.dislikes += 1
      if( changedState.isLikeButtonClicked == true ) {
        changedState.isLikeButtonClicked = false
        changedState.likes -= 1
      }
    } else {
      changedState.dislikes -= 1
    }
    this.setState(changedState)
  }
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
            <Button size="sm" onClick={this.likeButtonHandler}> 
            <FontAwesomeIcon icon={faThumbsUp} size="md" />
              {this.state.likes} </Button>
            <Button size="sm" onClick={this.dislikeButtonHandler}> 
            <FontAwesomeIcon icon={faThumbsDown} size="md" />{this.state.dislikes} </Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Circular;