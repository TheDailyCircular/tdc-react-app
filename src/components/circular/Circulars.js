import React, { Component } from 'react';
import './Circulars.css';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { getCirculars } from '../../actions/CircularActions';

class Circulars extends Component {
  constructor() {
    super();
    this.state = {
      pageNo: 0
    }
  }

  componentDidMount = () => {
    console.log("pageno " + this.state.pageNo);
    this.props.getCirculars(this.state.pageNo);
  }

  render() {
    return (
      <div>
        Circulars
      </div>
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