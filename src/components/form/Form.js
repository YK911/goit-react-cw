import React, { Component } from "react";
import shortid from "shortid";

const initialState = { query: "" };

class Form extends Component {
  state = {
    ...initialState
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const createTodo = {
      id: shortid(),
      title: this.state.query
    };
    this.props.addTodo(createTodo);

    this.setState({ ...initialState });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={query} />
          <button type="submit">ADD</button>
        </form>
      </>
    );
  }
}

export default Form;
