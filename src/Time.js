import React, { Component } from 'react';

class Time extends Component {
  render(props) {
    return (
      <div className="part">
        <span className="number">{this.props.PartTime}</span>
        <h6 className="title">{this.props.Description}</h6>
      </div>
    );
  }
}

export default Time ;