import React, { Component } from "react";
import { WishContext } from "./wishContext";
import shortid from "shortid";

export default class WishState extends Component {
  state = {
    data: []
  };

  addWish = event => {
    event.preventDefault();
    const wish = event.target.elements[0].value;
    this.setState(prevState => ({
      data: [...prevState.data, { wish, id: shortid() }]
    }));
  };

  deleteWish = id => {
    this.setState(prev => ({
      data: prev.data.filter(wish => wish.id !== id)
    }));
  };

  render() {
    const { data } = this.state;
    return (
      <WishContext.Provider
        value={{ addWish: this.addWish, data, deleteWish: this.deleteWish }}
      >
        {this.props.children}
      </WishContext.Provider>
    );
  }
}
