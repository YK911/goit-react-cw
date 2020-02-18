import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../redux/todo/todoActions";

const TodoList = ({ data, deleteTodo }) => (
  <ul>
    {data.map(({ title, id }) => (
      <li key={id}>
        <h2>{title}</h2>
        <button onClick={() => deleteTodo(id)}>delete: {title}</button>
      </li>
    ))}
  </ul>
);

const mSTP = state => ({
  data: state.todo
});

export default connect(mSTP, { deleteTodo })(TodoList);
