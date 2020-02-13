import React from "react";
import { ControllerContext } from "./ControllerContext";

export const StateController = ({ children }) => {
  const showUserName = () => {
    console.log("my name is MAX");
  };

  return (
    <ControllerContext.Provider
      value={{
        theme: "dark",
        showName: showUserName
      }}
    >
      {children}
    </ControllerContext.Provider>
  );
};
