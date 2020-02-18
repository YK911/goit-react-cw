import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/counter/counterActions";

const style = {
  main: {
    display: "block",
    width: "400px"
  },
  title: {
    display: "inline-block",
    margin: "0 20px"
  }
};

const Counter = ({ defaultValue, plus, minus }) => {
  console.log("props", defaultValue);
  return (
    <div style={style.main}>
      <button onClick={() => plus(1)}>INCREMENT</button>
      <h2 style={style.title}>{defaultValue}</h2>
      <button onClick={() => minus(1)}>DECREMENT</button>
    </div>
  );
};

const mapStateToProps = state => ({ defaultValue: state.counter });

const mapDispatchToProps = dispatch => ({
  plus: param => dispatch(increment(param)),
  minus: param => dispatch(decrement(param))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
