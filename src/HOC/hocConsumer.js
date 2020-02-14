import React from "react";
import { WishContext } from "../context/wishContext";

export const hocConsumer = BaseComponent => {
  const HocConsumer = () => {
    return (
      <WishContext.Consumer>
        {state => <BaseComponent {...state} />}
      </WishContext.Consumer>
    );
  };

  return HocConsumer;
};
