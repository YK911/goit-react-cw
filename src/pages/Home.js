import React from "react";
import { withRouter } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import { HomeContext } from "../context/HomeContext";

const Home = props => {
  return (
    <HomeContext.Provider value={{ theme: "dark" }}>
      <Navigation />
    </HomeContext.Provider>
  );
};

export default withRouter(Home);
