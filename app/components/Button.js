import React, { Component } from "react";

class Button extends Component {
  handleClick() {
    console.log(new Date().toLocaleTimeString());
  }

  render() {
    return (
      <button className="btn btn-success btn-lg rounded-0" onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
export default Button;
