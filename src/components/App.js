import React, { Component } from "react";
import News from "./news/News";
import Search from "./search/Search";

class App extends Component {
  state = {
    inputValue: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.elements[0].value;
    this.setState({ inputValue });
  };

  render() {
    return (
      <>
        <Search onHandleSubmit={this.handleSubmit} value={this.inputValue} />
        <News inputValue={this.state.inputValue} />
      </>
    );
  }
}

export default App;
