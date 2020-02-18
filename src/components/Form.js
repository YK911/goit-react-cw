import React, { Component } from "react";
import { addTodo } from "../redux/todo/todoActions";
import { connect } from "react-redux";
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

const mapDispatchToProps = {
  addTodo
};

export default connect(null, mapDispatchToProps)(Form);
