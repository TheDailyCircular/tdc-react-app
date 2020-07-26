import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import './Notifications.css';

class Notifications extends Component {
  render() {
    return (
      <div className="fluid notifications-div-holder">
        <Container className="notifications-div">
          <h5><u>Notifications</u></h5>
        </Container>
      </div>
    )
  }
}

export default Notifications;