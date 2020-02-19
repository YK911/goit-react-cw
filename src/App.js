import React, { Component } from "react";
import Card from "./components/card/Card";
import Cart from "./components/cart/Cart";

class App extends Component {
  state = {
    isOpen: false
  };

  openCart = () => {
    this.setState(prev => ({ isOpen: !prev.isOpen }));
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Card />
        <button
          onClick={this.openCart}
          className="btn waves-effect waves-light"
        >
          {this.state.isOpen ? "Hide cart" : "Show cart"}
        </button>
        {this.state.isOpen && <Cart />}
      </div>
    );
  }
}

export default App;
