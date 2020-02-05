import React, { Component } from "react";
import Form from "./components/form/Form";
import "./App.css";
import WishForm from "./components/wishForm/WishForm";
import WishList from "./components/wishList/WishList";

class App extends Component {
  state = {
    isVisible: true,
    wishes: []
  };

  getFormValueAuth = value => {
    if (value) {
      this.setState({
        isVisible: false
      });
    }
  };

  getFormValueWish = value => {
    this.setState(prev => {
      return {
        wishes: [...prev.wishes, value]
      };
    });
  };

  deleteWish = id => {
    this.setState(prev => ({
      wishes: prev.wishes.filter(elem => elem.id !== id)
    }));
  };

  render() {
    const { isVisible, wishes } = this.state;
    console.log(wishes);
    console.log("rerender");
    return (
      <>
        {isVisible ? (
          <Form getFormValueAuth={this.getFormValueAuth} />
        ) : (
          <>
            <WishForm getFormValueWish={this.getFormValueWish} />
            {wishes.length !== 0 && (
              <WishList onDeleteWish={this.deleteWish} data={wishes} />
            )}
          </>
        )}
      </>
    );
  }
}

export default App;
