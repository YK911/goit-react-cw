import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import css from "./App.module.css";

export default class App extends Component {
  state = {
    isOpen: false
  };

  handleOpen = () => {
    this.setState(prev => ({
      isOpen: !prev.isOpen
    }));
  };

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <button onClick={this.handleOpen}>OPEN</button>
        <CSSTransition
          in={isOpen}
          timeout={2000}
          classNames={css}
          unmountOnExit
        >
          <div className={css.container}>
            <h2>show drop</h2>
          </div>
        </CSSTransition>
      </>
    );
  }
}
