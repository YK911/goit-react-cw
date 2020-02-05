import React, { Component } from "react";

export const stp = value => {
  console.log("value", value);
  value > 20 && alert("ho -ho");
};

class Counter extends Component {
  state = {
    count: this.props.defaultNum
  };

  handleIncrement = () => {
    this.setState(prev => ({
      count: prev.count + this.props.step
    }));
    // console.log("--- show count ---", this.state.count);
  };

  handleDecrement = () => {
    this.setState(prev => ({
      count: prev.count - this.props.step
    }));
  };

  render() {
    const { count } = this.state;
    const { step } = this.props;
    console.log("rerender");
    stp(count);
    return (
      <>
        <button onClick={this.handleIncrement}>INCREMENT : {step}</button>
        <h2>{count}</h2>
        <button onClick={this.handleDecrement}>DECREMENT : {step}</button>
      </>
    );
  }
}

export default Counter;
