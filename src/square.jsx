import React, { Component } from 'react';

class Square extends Component {
  // handleClick = () => {
  //   return this.props.value === "X"
  // }
  render() {
    return (
      <button 
        className="square" 
        onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
