import React, { Component } from "react";

class Timer extends Component {
  render() {
    return <p>Today: {new Date().toLocaleString()}</p>;
  }
}
export default Timer;
