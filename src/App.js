import React from "react";
import Search from "./ui/Search";
import WishState from "./context/wishState";
import List from "./components/List";

function App() {
  return (
    <WishState>
      <Search />
      <List />
    </WishState>
  );
}

export default App;
