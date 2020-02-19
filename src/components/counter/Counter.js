import React from "react";

const style = {
  main: {
    display: "block",
    width: "400px",
    height: "50px"
  },
  title: {
    display: "inline-block",
    margin: "0 20px"
  }
};

const Counter = ({ defaultValue, increment, decrement }) => {
  return (
    <div style={style.main}>
      <button onClick={() => decrement(1)}>DECREMENT</button>
      <h2 style={style.title}>{defaultValue}</h2>
      <button onClick={() => increment(1)}>INCREMENT</button>
    </div>
  );
};

export default Counter;
