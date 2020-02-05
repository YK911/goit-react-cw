import React, { Component } from "react";
import Form from "./components/form/Form";
import "./App.css";
import WishForm from "./components/wishForm/WishForm";
import WishList from "./components/wishList/WishList";

// [...prev.wishes, value]

export const addWish = (prev, value) => {
  return [...prev.wishes, value];
};

class App extends Component {
  state = {
    isAuth: false,
    wishes: []
  };

  componentDidMount() {
    const getLocal = JSON.parse(localStorage.getItem("wishes"));
    this.setState({
      wishes: getLocal || []
    });
  }

  getFormValueAuth = value => {
    if (value) {
      this.setState({
        isAuth: false
      });
    }
  };

  getFormValueWish = value => {
    this.setState(prev => {
      localStorage.setItem("wishes", JSON.stringify(addWish(prev, value)));
      return {
        wishes: addWish(prev, value)
      };
    });
  };

  deleteWish = id => {
    this.setState(prev => {
      localStorage.setItem(
        "wishes",
        JSON.stringify(prev.wishes.filter(elem => elem.id !== id))
      );
      return {
        wishes: prev.wishes.filter(elem => elem.id !== id)
      };
    });
  };

  updatePriority = (priority, id) => {
    this.setState(prev => {
      prev.wishes.forEach(elem => {
        if (elem.id === id) {
          elem.priority = priority;
        }
      });
      localStorage.setItem("wishes", JSON.stringify([...prev.wishes]));
      return {
        wishes: [...prev.wishes]
      };
    });
  };

  onLogOut = () => {
    // localStorage.setItem("isAuth", true);
  };

  render() {
    const { isAuth, wishes } = this.state;

    return (
      <>
        {isAuth ? (
          <Form getFormValueAuth={this.getFormValueAuth} />
        ) : (
          <>
            <WishForm getFormValueWish={this.getFormValueWish} />
            <button onClick={this.onLogOut}>logOut</button>
            {wishes.length !== 0 && (
              <WishList
                onUpdatePriority={this.updatePriority}
                onDeleteWish={this.deleteWish}
                data={wishes}
              />
            )}
          </>
        )}
      </>
    );
  }
}

export default App;
