import React, { Component } from "react";
import Counter from "./components/counter/counterContainer";
import Form from "./components/form/formContainer";
import TodoList from "./components/todo/TodoList";

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
