import React, { Component } from "react";
import Form from "./components/form/Form";
import "./App.css";
import WishForm from "./components/wishForm/WishForm";
import WishList from "./components/wishList/WishList";
import axios from "axios";

// [...prev.wishes, value]

export const addWish = (prev, value) => {
  return [...prev.wishes, value];
};

class App extends Component {
  state = {
    isAuth: false,
    wishes: []
  };

  async componentDidMount() {
    const data = await axios.get(
      "https://wishlist-e6e8b.firebaseio.com/wishes.json"
    );
    const transformFirebase = Object.keys(data.data).map(key => ({
      ...data.data[key],
      id: key
    }));
    this.setState({ wishes: transformFirebase });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.wishes.length !== this.state.wishes.length) {
      const data = await axios.get(
        "https://wishlist-e6e8b.firebaseio.com/wishes.json"
      );
      const transformFirebase = Object.keys(data.data).map(key => ({
        ...data.data[key],
        id: key
      }));
      this.setState({ wishes: transformFirebase });
    }
  }

  getFormValueAuth = value => {
    if (value) {
      this.setState({
        isAuth: false
      });
    }
  };

  getFormValueWish = async value => {
    await axios.post(
      "https://wishlist-e6e8b.firebaseio.com/wishes.json",
      value
    );
    this.setState(prev => {
      return {
        wishes: addWish(prev, value)
      };
    });
  };

  deleteWish = async id => {
    await axios.delete(
      `https://wishlist-e6e8b.firebaseio.com/wishes/${id}.json`
    );

    this.setState(prev => {
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
    console.log("wishes", wishes);
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
