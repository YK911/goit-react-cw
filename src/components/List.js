import React from "react";
import { hocConsumer } from "../HOC/hocConsumer";

const List = ({ data, deleteWish }) => (
  <ul>
    {data.map(({ wish, id }) => (
      <li key={id}>
        <h2>{wish}</h2>
        <button onClick={() => deleteWish(id)}>DELETE</button>
      </li>
    ))}
  </ul>
);

export default hocConsumer(List);
