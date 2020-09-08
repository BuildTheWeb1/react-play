import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = { date: new Date().toLocaleString() };
  }

  render() {
    setTimeout(() => {
      this.setState({
        date: new Date().toLocaleString()
      });
    }, 1000);
    return <p>Today: {this.state.date}</p>;
    // const [theTime, setTheTime] = this.state(new Date().toLocaleString());
    // setTimeout(() => {
    //   setTheTime(new Date().toLocaleString());
    // }, 1000);
    // return <p>Today: {theTime}</p>;
  }
}
export default Timer;
