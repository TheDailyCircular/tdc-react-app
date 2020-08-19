import React, { Component } from 'react';
import './Posts.css';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Posts extends Component {
  render() {
    return (
      <Container id="posts-container">
        <div>
          <Link to='/posts/create'>
            <Button id="post-a-new-circular-btn"><strong>+ Post a new circular</strong></Button>
          </Link>
        </div>
      </Container>
    )
  }
}

export default Posts;