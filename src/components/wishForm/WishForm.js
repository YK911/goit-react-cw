import React, { Component } from "react";
import shortId from "shortid";
import Select from "../select/Select";

const INITIAL_STATE = {
  title: "",
  date: new Date().toDateString(),
  priority: "normal"
};

class WishForm extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.getFormValueWish({ ...this.state, id: shortId() });
    this.setState({ ...INITIAL_STATE });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "prevState ---> ",
      prevState.priority,
      "||",
      "this.state ---> ",
      this.state.priority
    );
    if( prevState.priority !== this.state.priority ){
      console.log('axios')
    }
  }

  chooseSelect = param => {
    this.setState({
      priority: param.value
    });
  };

  render() {
    const { title } = this.state;

    return (
      <>
        <Select onChooseSelect={this.chooseSelect} />
        <form onSubmit={this.handleSubmit}>
          <input
            maxLength={15}
            minLength={5}
            type="text"
            name="title"
            onChange={this.handleChange}
            value={title}
          />
          <button type="submit">ADD</button>
        </form>
      </>
    );
  }
}

export default WishForm;
