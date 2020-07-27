import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import HeaderAdsence from '../adsence/HeaderAdsence';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Row style={{ padding: "15px" }}>
        <Col md={3} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
          <Link to="/">
            <img src="./thedailycircular.png" width="100%" height="55px" alt="The Daily Circular" />
          </Link>
        </Col>
        <Col md={9} >
          <HeaderAdsence />
        </Col>
      </Row>
    )
  }
}

export default Header;