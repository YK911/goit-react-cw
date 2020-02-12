import React from "react";
import { withRouter } from "react-router-dom";
// import Navigation from "../components/navigation/Navigation";

const Home = props => {
  console.log("props.history", props.history);
  return <h2>HOME</h2>;
};

export default withRouter(Home);
