import React, { Component } from "react";
import Toggle from "../components/toggle/Toggle";
import List from "./list/List";
import Counter from "./counter/Counter";
const arr = [
  { name: "react", id: "43rfdf" },
  { name: "redux", id: "9549" },
  { name: "graphQL", id: "dfsdff" },
  { name: "mobX", id: "54ktrf" }
];
// const cars = ["bmw", "audi", "ford", "tesla"];

const defaultImage =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fideascdn.lego.com%2Fcommunity%2Flego_ci%2Fprojects%2F72b%2F40d%2F112580%2F2041542-o_19s9uqac011gtggoelc1oub1ht37-thumbnail-full-tHQwYao4Si5NvA.jpg&f=1&nofb=1";

// const App = () => {
//   return (
//     <>
//       <Toggle>
//         <List data={arr} isOpen={false} img={defaultImage} />
//       </Toggle>
//       <Counter defaultNum={5} step={10} />
//     </>
//   );
//   //   return <>{arr.length !== 0 ? <List data={arr} /> : <Default />}</>;
// };

// export default App;

class App extends Component {
  state = {
    data: arr
  };

  deleteItem = id => {
    console.log("delete :", id);
    this.setState(prev => ({
      data: prev.data.filter(elem => elem.id !== id)
    }));
  };

  addItem = () => {
    const newTask = { name: "rubi", id: "54ktfd435fdf" };
    this.setState(prev => ({
      data: [...prev.data, newTask]
    }));
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <button onClick={this.addItem}>add</button>
        <Toggle>
          <List
            data={data}
            isOpen={false}
            img={defaultImage}
            deleteItem={this.deleteItem}
          />
        </Toggle>
        <Counter defaultNum={5} step={10} />
      </>
    );
  }
}

export default App;
