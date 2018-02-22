import React, { Component } from 'react';


export default class extends Component {
  render() {
    const square = this.props
    
    return (
      <button className="square" onClick={square.onClick}>
        {square.value}
      </button>
    )
  }
}
