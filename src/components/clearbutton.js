import React, { Component } from "react";
import "./clearbutton.css";

class ClearButton extends Component {
  render() {
    return( 
      <div 
        className="clear-btn"
        onClick={() => this.props.handleClear()}
      >
        {this.props.children}
      </div>
    )
  }
}

export default ClearButton;