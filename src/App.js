import React, { Component } from "react";
import Counter from "./components/Counter";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Counter />
        <Form />
        <TodoList />
      </>
    );
  }
}

export default App;
