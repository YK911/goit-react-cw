import React, { Component } from "react";
import Button from "../ui/Button";

const transformOldProps = ({ author, title, image }) => ({
  author,
  title,
  image
});

export const toggle = BaseComponent => {
  return class Toogle extends Component {
    state = {
      isOpen: false
    };

    showDescription = () => {
      console.log("show");
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    };
    render() {
      console.log("object", transformOldProps);
      const { isOpen } = this.state;
      const { description } = this.props;
      return (
        <>
          <BaseComponent {...this.props} />
          <Button onHandleMenuOpen={this.showDescription} buttonName="show" />
          {isOpen && <p>{description}</p>}
        </>
      );
    }
  };
};
