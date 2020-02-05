import React from "react";

import List from "./List";
const arr = [
  { name: "react", id: "43rfdf" },
  { name: "redux", id: 9549 },
  { name: "graphQL", id: "dfsdff" },
  { name: "mobX", id: "54ktrf" }
];
// const cars = ["bmw", "audi", "ford", "tesla"];

const App = () => {
  return (
    <>
      <List data={arr} />
    </>
  );
  //   return <>{arr.length !== 0 ? <List data={arr} /> : <Default />}</>;
};

export default App;
