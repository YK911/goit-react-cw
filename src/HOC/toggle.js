import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const transformOldProps = ({ author, title, image, source, query }) => ({
  author,
  title,
  image,
  source,
  query
});

export const toggle = param => BaseComponent => {
  console.log("param", param);
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
          {isOpen && (
            <Link
              style={{ textDecoration: "none" }}
              to={{
                pathname: `news/${this.props.source}`,
                search: `?category=${this.props.query}`,
                state: { isAuth: true }
              }}
            >
              <p>{description}</p>
            </Link>
          )}
        </>
      );
    }
  };
};
