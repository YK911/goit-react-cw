import React, { Component } from "react";

const INITIAL_STATE = {
  login: "",
  email: "",
  password: ""
};

class Form extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = event => {
    event.preventDefault();
    this.props.getFormValueAuth(this.state);
    // console.log(event.target.elements);
    // const [login, email, password] = event.target.elements;
    // console.log(login.value);
    // console.log(email.value);
    // console.log(password.value);
    // this.setState({
    //   login: login.value,
    //   email: email.value,
    //   password: password.value
    // });

    this.setState({
      ...INITIAL_STATE
    });
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  render() {
    const { login, email, password } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="login"
            onChange={this.handleChange}
            value={login}
          />
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
          <button type="submit">register</button>
        </form>
      </>
    );
  }
}

export default Form;
