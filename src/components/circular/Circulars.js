import React, { Component } from 'react';
import './Circulars.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCirculars } from '../../actions/CircularActions';
import { Container } from 'react-bootstrap';
import Circular from './Circular';

class Circulars extends Component {
  constructor() {
    super();
    this.state = {
      pageNo: 0
    }
  }

  componentDidMount = () => {
    this.props.getCirculars(this.state.pageNo);
  }

  render() {
    const { circulars } = this.props;

    return (
      <Container id="circulars-container">
        {
          circulars.map((circular, idx) => (
            <Circular key={idx} circular={circular} />
          ))
        }
      </Container>
    )
  }
}

Circulars.protoType = {
  circulars: PropTypes.object.isRequired,
  getCirculars: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  circulars: state.circular.circulars
});

const mapDispatchToProps = {
  getCirculars: getCirculars
};

export default connect(mapStateToProps, mapDispatchToProps)(Circulars);