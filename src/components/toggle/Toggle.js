import React, { Component } from "react";

class Toggle extends Component {
  state = {
    isOpen: false
  };

  handleClick = () => {
    // this.setState(prevState => {
    //     console.log(prevState)
    //   return {
    //     isOpen: !prevState.isOpen
    //   };
    // });

    this.setState(prev => ({ isOpen: !prev.isOpen }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <>
        <button onClick={this.handleClick}>{isOpen ? "CLOSE" : "OPEN"}</button>
        {isOpen && this.props.children}
      </>
    );
  }
}

export default Toggle;
